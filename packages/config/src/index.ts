import dotenv from 'dotenv';
import defaultValues from './defaultValues';

// set ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// load dotenv
const dotEnvConfig = dotenv.config();
if (dotEnvConfig.error) {
    // error, continue with default
}

export default {
    port: parseInt(process.env.PORT || '', 10) || defaultValues.port,
    log_enable: (process.env.LOG_ENABLE === 'true'),
    db_uri: process.env.DB_URI || defaultValues.db_uri,
    jwt: {
        secret: process.env.JWT_SECRET || defaultValues.jwt.secret,
        algo: process.env.JWT_ALGO || defaultValues.jwt.algo
    }
};