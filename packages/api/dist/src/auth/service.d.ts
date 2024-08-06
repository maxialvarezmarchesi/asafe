export declare const service: {
    auth: (data: any) => Promise<{
        token: string;
    } | null>;
    authAdmin: (data: any) => Promise<{
        token: string;
    } | null>;
    tokenizer: {
        encode: (data: any) => Promise<string>;
        decode: (token: string) => Promise<any>;
        verify: (data: any) => Promise<any>;
    };
};
