"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliSlsService = void 0;
const coa_helper_1 = require("coa-helper");
const AliSlsBin_1 = require("../lib/AliSlsBin");
class AliSlsService {
    constructor(config) {
        this.config = config;
        this.bin = new AliSlsBin_1.AliSlsBin(config);
    }
    // GetLogs 接口查询指定 Project 下某个 Logstore 中的日志数据
    async getLogsBody(name, from, to, param) {
        const params = {
            type: 'log',
            from: coa_helper_1._.toInteger(from / 1000),
            to: coa_helper_1._.toInteger(to / 1000),
            ...param,
        };
        const url = `/logstores/${name}`;
        const result = await this.bin.getBody(url, params);
        return result;
    }
    // GetLogs 接口查询指定 Project 下某个 Logstore 中的日志数据
    async getLogs(name, from, to, param) {
        const params = {
            type: 'log',
            from: from.unix(),
            to: to.unix(),
            ...param,
        };
        const url = `/logstores/${name}`;
        return await this.bin.get(url, params);
    }
    // 查询指定 Project 下某个 Logstore 中日志的分布情况
    async getHistograms(name, from, to, query, topic) {
        const params = {
            type: 'histogram',
            from: from.unix(),
            to: to.unix(),
            query,
            topic,
        };
        const url = `/logstores/${name}`;
        return await this.bin.get(url, params);
    }
}
exports.AliSlsService = AliSlsService;
