import { SignInDto } from '../dto/signin.dto';
import { Injectable } from '@nestjs/common';

@Injectable()

export class AuthService {
    private users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ];

    validateUser(username: string, password: string): boolean {
        const user = this.users.find(user => user.username === username && user.password === password);
        return user !== undefined;
    }

    async login(username: string, password: string): Promise<{ accessToken: string }> {
        // Implement your authentication logic here
        const accessToken = 'some-jwt-token'; // Replace with actual token generation logic
        return { accessToken };
    }

    async logout(user: any): Promise<void> {
        // Implement your logout logic here
    }
}
 