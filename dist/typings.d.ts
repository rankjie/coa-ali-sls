declare const config: {
    endpoint: string;
    project: string;
    accessKeyId: string;
    accessKeySecret: string;
};
export declare namespace AliSls {
    type Config = typeof config;
    interface Dic<T = any> {
        [key: string]: T;
    }
}
export {};
