import { Dayjs } from 'dayjs';
import { AliSls } from '../typings';
export declare class AliSlsService {
    private readonly config;
    private readonly bin;
    constructor(config: AliSls.Config);
    getLogsBody<T = AliSls.Dic<any>>(name: string, from: number, to: number, param?: {
        query?: string;
        topic?: string;
        offset?: number;
        line?: number;
        reverse?: boolean;
    }): Promise<T[]>;
    getLogs(name: string, from: Dayjs, to: Dayjs, param?: {
        query?: string;
        topic?: string;
        offset?: number;
        line?: number;
        reverse?: boolean;
    }): Promise<{
        body: AliSls.Dic<any>[];
        info: AliSls.Dic<string>;
    }>;
    getHistograms(name: string, from: Dayjs, to: Dayjs, query?: string, topic?: string): Promise<{
        body: AliSls.Dic<any>[];
        info: AliSls.Dic<string>;
    }>;
}
