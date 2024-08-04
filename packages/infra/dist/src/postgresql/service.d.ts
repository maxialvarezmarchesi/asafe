import { PrismaClient } from '@prisma/client';
export declare const db: PrismaClient<{
    datasourceUrl: string;
    log: ("info" | "query")[];
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
