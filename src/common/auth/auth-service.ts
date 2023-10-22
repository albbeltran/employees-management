// using jwt package to create and manage JSON Web Token
import jwt from 'jsonwebtoken';
// using bcrypt package to hash passwords
import bcrypt from 'bcryptjs';

import { IAuthService } from "./IAuthService";
import { config } from '../../platform/index';

export class AuthService implements IAuthService {

    // generate new JSON web token
    generateToken(data: any): any {
        return jwt.sign({ data }, config.auth.secret, {
            expiresIn: "24h",
        });
    }

    // verify existing JSON web token
    verifyToken(token: string): any {
        try {
            return jwt.verify(token, config.auth.secret);
        } catch (err) {
            return false;
        }
    }

    // compare attempt password with saved password and return boolean
    async matchPassword(password: string, hash: string): Promise<Boolean> {
        // using compare method involves async handling
        return await bcrypt.compare(password, hash);
    }

    // hash a new password
    hashPassword(plainPassword: string): string {
        const saltRounds = process.env.JWTSALTS;
        // using genSaltSync and hashSync does not involve async handling
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(plainPassword, salt);

        return hash;
    }
}