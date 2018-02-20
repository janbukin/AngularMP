import { Injectable, Injector } from '@angular/core';
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
  constructor(private inj: Injector) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizationService = this.inj.get(AuthorizationService);
    request = request.clone({
      setHeaders: {
        Authorization: `${authorizationService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
