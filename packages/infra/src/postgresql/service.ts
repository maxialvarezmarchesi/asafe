import { PrismaClient } from '@prisma/client'
import config from '@maxialvarez/asafe-config'

console.log(" confiu" + config.db_uri);
export const db = new PrismaClient({
    datasourceUrl: config.db_uri,
    log: ['query', 'info'] 
});
