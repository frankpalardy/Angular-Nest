import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';

@Injectable()
export class AuthService {
    async login(username: string, password: string): Promise<{ accessToken: string }> {
        // Validate user directly here
        if (this.validateUser(username, password)) {
            return { accessToken: 'test-token-' + Date.now() };
        }
        throw new Error('Failed to authenticate');
    }

    validateUser(username: string, password: string): boolean {
        // Add your validation logic here
        return true;  // For testing, always return true
    }

    logout(user: any): Observable<void> {
        return from(Promise.resolve());
    }
}

 