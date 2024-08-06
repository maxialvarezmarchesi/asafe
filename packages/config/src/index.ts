import dotenv from 'dotenv';
import defaultValues from './defaultValues';

// set ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// load dotenv
dotenv.config();

export default {
    port: parseInt(process.env.PORT || '', 10) || defaultValues.port,
    log_enable: (process.env.LOG_ENABLE === 'true'),
    db_uri: process.env.DATABASE_URL?.replace("${DB_PASSWORD}", process.env.DB_PASSWORD || '') || defaultValues.db_uri,
    jwt: {
        secret: process.env.JWT_SECRET || defaultValues.jwt.secret,
        algo: process.env.JWT_ALGO || defaultValues.jwt.algo
    },
    adminCredentials:{
        email: process.env.ADMIN_EMAIL || defaultValues.adminCredentials.email,
        password: process.env.ADMIN_PASSWORD || defaultValues.adminCredentials.password,
    }
};