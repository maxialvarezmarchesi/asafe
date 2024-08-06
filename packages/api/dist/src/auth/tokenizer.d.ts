export declare const tokenizer: {
    encode: (data: any) => Promise<string>;
    decode: (token: string) => Promise<any>;
    verify: (data: any) => Promise<any>;
};
