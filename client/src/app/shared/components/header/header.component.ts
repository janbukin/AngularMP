import { Component, OnDestroy } from '@angular/core';
import { AuthorizationService } from 'app/shared/services/authorization/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.styles.scss' ]
  })

  export class HeaderComponent implements OnDestroy {
    public userName?: string;
    public isAuthenticated: boolean;
    public subscription: Subscription;

    constructor(private authorizationService: AuthorizationService, private router: Router) {
      this.isAuthenticated = this.authorizationService.isAuthenticated();

      if (!this.isAuthenticated) {
        this.router.navigate(['/login']);
      }

      this.subscription = this.authorizationService.getUserInfo()
        .subscribe((login: string) => this.userName = login);
    }

    public logout(): void {
      this.authorizationService.logout();
    }

    public getUserInfo(): string {
      let userName: string = '';

      this.subscription = this.authorizationService.getUserInfo()
        .subscribe((login: string) => userName = login);

      return userName;
    }

    public ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  }
