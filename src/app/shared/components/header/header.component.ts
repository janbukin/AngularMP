import { Component } from '@angular/core';
import { AuthorizationService } from 'app/shared/services/authorization/authorization.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.styles.scss' ]
  })

  export class HeaderComponent {
    private userName: string;

    constructor(private authorizationService: AuthorizationService) {
      if (this.isAuthenticated()) {
        this.userName = this.getUserInfo();
      }
    }

    public logout(): void {
      this.authorizationService.logout();
      console.log('Logged out');
    }

    public isAuthenticated(): boolean {
      return this.authorizationService.isAuthenticated();
    }

    public getUserInfo(): string {
      return this.authorizationService.getUserInfo();
    }
  }
