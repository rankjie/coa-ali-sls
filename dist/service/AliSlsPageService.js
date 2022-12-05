"use strict";
/**
 * 通过设置日志服务控制台内嵌参数，可调整内嵌页面的显示效果。
 * 日志服务提供免登方式嵌入自建的Web页面，支持您快速方便地对日志进行查询和分析。在此基础上，还提供了一系列UI参数与第三方自建Web页面进行融合展示。通过免登方式嵌入自建Web页面的具体操作，请参见控制台内嵌及分享
 * 详见: https://help.aliyun.com/document_detail/74971.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliSlsPageService = void 0;
const baseURL = 'https://sls4service.console.aliyun.com';
class AliSlsPageService {
    /**
     * 获取日志查询控制台链接
     */
    getLogSearchConsolePageUrl(project, logstore, params) {
        const search = new URLSearchParams(params).toString();
        return `${baseURL}/lognext/project/${project}/logsearch/${logstore}?${search}`;
    }
    /**
     * 获取快速查询控制台链接
     */
    getSavedSearchConsolePageUrl(project, savedsearch, params) {
        const search = new URLSearchParams(params).toString();
        return `${baseURL}/lognext/project/${project}/savedsearch/${savedsearch}?${search}`;
    }
    /**
     * 获取仪表盘控制台链接
     */
    getDashboardConsolePageUrl(project, dashboard, params) {
        const search = new URLSearchParams(params).toString();
        return `${baseURL}/lognext/project/${project}/dashboard/${dashboard}?${search}`;
    }
}
exports.AliSlsPageService = AliSlsPageService;
