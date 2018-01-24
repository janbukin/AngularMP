import { Component } from '@angular/core';
import { AuthorizationService } from 'app/shared/services/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.styles.scss' ]
  })

  export class HeaderComponent {
    public userName?: string;
    public isAuthenticated: boolean;

    constructor(private authorizationService: AuthorizationService, private router: Router) {
      this.isAuthenticated = this.authorizationService.isAuthenticated();

      if (!this.isAuthenticated) {
        this.router.navigate(['/login']);
      }

      this.userName = this.authorizationService.getUserInfo();
    }

    public logout(): void {
      this.authorizationService.logout();
    }

    public getUserInfo(): string {
      return this.authorizationService.getUserInfo();
    }
  }
