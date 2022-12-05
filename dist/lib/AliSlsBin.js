"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliSlsBin = void 0;
const coa_error_1 = require("coa-error");
const coa_helper_1 = require("coa-helper");
const coa_secure_1 = require("coa-secure");
class AliSlsBin {
    constructor(config) {
        this.config = config;
    }
    async get(url, params) {
        const path = url + '?' + this.getSortQueryString(params);
        const headers = this.getHeaders('GET', path);
        const baseURL = `https://${this.config.project}.${this.config.endpoint}`;
        const result = await coa_helper_1.axios
            .get(url, { params, headers, baseURL })
            .catch(this.resultError);
        return this.resultResponse(result);
    }
    async getBody(url, params) {
        const { body } = await this.get(url, params);
        return body;
    }
    resultError(e) {
        const data = e.response.data;
        coa_error_1.die.hint(data.errorMessage, 400, data.errorCode);
    }
    resultResponse(result) {
        const body = result.data;
        const info = {};
        coa_helper_1._.forEach(result.headers, (v, k) => {
            if (k.startsWith('x-log-'))
                info[coa_helper_1._.camelCase(k.substr(6))] = v;
        });
        return { body, info };
    }
    getSortQueryString(params) {
        const list = [];
        coa_helper_1._.forEach(params, (v, k) => {
            list.push(k + '=' + v);
        });
        return list.sort().join('&');
    }
    getHeaders(method, path, headers = {}) {
        coa_helper_1._.defaults(headers, {
            'x-log-bodyrawsize': '0',
            'x-log-apiversion': '0.6.0',
            'x-log-signaturemethod': 'hmac-sha1',
        });
        headers.Date = new Date().toUTCString();
        headers['Content-MD5'] = '';
        headers['Content-Type'] = '';
        headers.Authorization = this.signature(method, path, headers);
        return headers;
    }
    signature(method, path, headers) {
        const x_list = [];
        const signs = [];
        coa_helper_1._.forEach(headers, (v, k) => {
            k.startsWith('x-log') && x_list.push(k + ':' + v);
        });
        signs.push(method || '');
        signs.push(headers['Content-Md5'] || '');
        signs.push(headers['Content-Type'] || '');
        signs.push(headers.Date || '');
        signs.push(...x_list.sort());
        signs.push(path);
        const signature = coa_secure_1.secure.sha1_hmac(signs.join('\n'), this.config.accessKeySecret, 'base64');
        return `LOG ${this.config.accessKeyId}:${signature}`;
    }
}
exports.AliSlsBin = AliSlsBin;
