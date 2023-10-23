//* Declares var types for configuration

export type Config = {
    readonly port: number;
    readonly host: string;
    auth: {
        readonly secret: string;
        readonly salts: number;
    };
};
