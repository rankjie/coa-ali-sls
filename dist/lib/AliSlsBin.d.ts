import { AliSls } from '../typings';
export declare class AliSlsBin {
    private readonly config;
    constructor(config: AliSls.Config);
    get(url: string, params: AliSls.Dic): Promise<{
        body: AliSls.Dic<any>[];
        info: AliSls.Dic<string>;
    }>;
    getBody(url: string, params: AliSls.Dic): Promise<AliSls.Dic<any>[]>;
    protected resultError(e: any): void;
    private resultResponse;
    private getSortQueryString;
    private getHeaders;
    private signature;
}
