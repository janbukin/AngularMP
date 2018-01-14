import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationService {
    private key = 'auth';
    private storage = window.localStorage;

    public login(login: string): void {
        this.storage.setItem(this.key, login);
    }

    public logout(): void {
        this.storage.removeItem(this.key);
    }

    public isAuthenticated(): boolean {
        return !!this.storage.getItem(this.key);
    }

    public getUserInfo(): string {
        let userName: string = this.storage.getItem(this.key);
        return typeof userName === 'undefined' ? null : userName;
    }
}
