import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from 'app/shared/services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authorizationService: AuthorizationService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${this.authorizationService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
