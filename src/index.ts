import { config, startExpressServer } from './platform/index';

export const app = startExpressServer({
    port: config.port,
    host: config.host,
});