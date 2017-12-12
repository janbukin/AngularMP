import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

    public login(): void {
        
    }

    public logout(): void {
        
    }

    public isAuthenticated(): boolean {
        return true;
    }

    public getUserInfo(): string {
        return 'User login';
    }
}
