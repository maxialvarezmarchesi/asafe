import { createDecoder, createSigner, createVerifier } from "fast-jwt";
import config from "@maxialvarez/asafe-config"

const signer = createSigner({ key: async () => config.jwt.secret });
const verifier = createVerifier({ key: async () => config.jwt.secret });

export const tokenizer = {
    encode: async (data: any): Promise<string> => signer(data),
    decode: async (token: string): Promise<any> => new Promise(resolve => resolve((createDecoder())(token))),
    verify: async (data: any): Promise<any> => verifier(data),
}