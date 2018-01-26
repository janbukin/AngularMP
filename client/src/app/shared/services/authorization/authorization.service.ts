import { Injectable } from '@angular/core';
import {
    Response,
    Request,
    Http,
    RequestOptions,
    RequestMethod,
    URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserDto } from 'app/shared/models/user-dto.model';

@Injectable()
export class AuthorizationService {
    private key = 'auth';
    private storage = window.localStorage;
    private baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3004';
    }

    public login(login: string, password: string): Observable<void> {
        let requstOptions = new RequestOptions();

        requstOptions.url = `${this.baseUrl}/auth/login`;
        requstOptions.method = RequestMethod.Post;
        requstOptions.body = { login, password };
        let request: Request = new Request(requstOptions);

        return this.http.request(request)
            .map((res: Response) => res.json())
            .map((token: string) => {
                this.storage.setItem(this.key, token);
            });
    }

    public logout(): void {
        this.storage.removeItem(this.key);
    }

    public isAuthenticated(): boolean {
        return !!this.storage.getItem(this.key);
    }

    public getUserInfo(): Observable<string> {
        let requstOptions = new RequestOptions();

        requstOptions.url = `${this.baseUrl}/auth/userinfo`;
        requstOptions.method = RequestMethod.Post;
        let request: Request = new Request(requstOptions);

        return this.http.request(request)
            .map((res: Response) => res.json())
            .map((user: UserDto) => user.login)
            .catch(this.handleError);
    }

    private handleError(error: Response): Observable<any> {
        console.error('Auth Error occured', error);
        if (error.status === 401) {
            return Observable.of('');
        } else {
            return Observable.throw(error);
        }
    }
}
