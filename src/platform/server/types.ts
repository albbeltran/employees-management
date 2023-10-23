//* Interface for server start options
export interface IStartOptions {
    port: number;
    host: string;
    corsOrigin?: string | string[];
}