//* Creates an interface to define user authentication methods

export interface IAuthService {
    generateToken(data: any): any;
    verifyToken(token: string): any;
    matchPassword(password: string, hash: string): Promise<Boolean>;
    hashPassword(plainPassword: string): string;
}