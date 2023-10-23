//* Defines var for configuration

import dotenv from "dotenv";

dotenv.config();

import type { Config } from './types';

// implements Config obj containing var types
const config: Config = {
  port: process.env.PORT ? +process.env.PORT : 3001,
  host: process.env.HOST ?  process.env.HOST : "0.0.0.0",
  auth: {
    secret: process.env.JWTSECRET || 's3cr3t',
    salts: process.env.PORT ? +process.env.PORT : 5,
  }
};

export default config;