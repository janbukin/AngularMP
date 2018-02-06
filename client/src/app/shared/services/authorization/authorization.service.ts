import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserDto } from 'app/shared/models/user-dto.model';
import { TokenDto } from 'app/shared/models/token-dto.model';

@Injectable()
export class AuthorizationService {
  private key = 'auth';
  private storage = window.localStorage;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3004';
  }

  public login(login: string, password: string): Observable<boolean> {
    return this.http.post<TokenDto>(`${this.baseUrl}/auth/login`, { login, password })
      .map((res: TokenDto) => {
        this.storage.setItem(this.key, res.token);
        return true;
      });
  }

  public logout(): void {
    this.storage.removeItem(this.key);
  }

  public getToken(): string {
    return this.storage.getItem(this.key);
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public getUserInfo(): Observable<string> {
    return this.http.post(`${this.baseUrl}/auth/userinfo`, null)
      .map((res: UserDto) => res.login)
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
