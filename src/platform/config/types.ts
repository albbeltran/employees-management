//* Declares var types for configuration

export type Config = {
    readonly port: number;
    auth: {
        readonly secret: string;
        readonly salts: number;
    };
};
