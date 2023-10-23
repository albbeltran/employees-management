import { config, startExpressServer } from './platform/index';
// const config = require('./platform/index.ts');

export const app = startExpressServer({
    port: config.port,
    host: config.host,
});