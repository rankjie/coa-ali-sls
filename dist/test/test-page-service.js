"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coa_helper_1 = require("coa-helper");
const __1 = require("..");
coa_helper_1.$.run(async () => {
    const pageService = new __1.AliSlsPageService();
    const url = pageService.getLogSearchConsolePageUrl('xxx-project-xxx', 'xxx-logstore-xx', { isShare: 'true' });
    console.log(url);
});
