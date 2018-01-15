import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthorizationService {
    private key = 'auth';
    private storage = window.localStorage;
    private ReplaySubject: ReplaySubject<string>;

    constructor() {
        this.ReplaySubject = new ReplaySubject(1);

        let subscription = this.ReplaySubject.subscribe(
            function (x) {
                console.log('Next: ' + x.toString());
            },
            function (err) {
                console.log('Error: ' + err);
            },
            function () {
                console.log('Completed');
            });
    }

    public login(login: string): void {
        this.storage.setItem(this.key, login);
        this.ReplaySubject.next(login);
    }

    public logout(): void {
        this.storage.removeItem(this.key);
        this.ReplaySubject.next('');
    }

    public isAuthenticated(): boolean {
        return !!this.storage.getItem(this.key);
    }

    public getUserInfo(): string {
        let userName: string = this.storage.getItem(this.key);
        return typeof userName === 'undefined' ? null : userName;
    }
}
