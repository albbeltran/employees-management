//* Defines var for configuration

import type { Config } from './types';

// implements Config obj containing var types
const config: Config = {
  port: +process.env.PORT || 3000,
  auth: {
    secret: process.env.JWTSECRET || 's3cr3t',
    salts: +process.env.JWTSALTS,
  }
};

export default config;
