import { PrismaClient } from '@prisma/client'
import config from '@maxialvarez/asafe-config'

export const db = new PrismaClient({
    datasourceUrl: config.db_uri,
    log: ['query', 'info'] 
});
