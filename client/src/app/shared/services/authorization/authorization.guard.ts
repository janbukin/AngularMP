import { CanActivate, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from 'app/shared/services';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanLoad {

  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  public canActivate(): boolean {
    return this.canAccess();
  }

  public canLoad(route: Route): boolean {
    return this.canAccess();
  }

  private canAccess(): boolean {
    let isAuthenticated = this.authorizationService.isAuthenticated();
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
