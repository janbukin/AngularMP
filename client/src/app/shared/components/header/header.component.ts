import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from 'app/shared/services/authorization/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.styles.scss' ]
})

export class HeaderComponent implements OnInit, OnDestroy {
  public userName?: string;
  public isAuthenticated: boolean;
  public subscription: Subscription;

  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.authorizationService.isAuthenticated();

    if (!this.isAuthenticated) {
      this.router.navigate(['/login']);
    }

    this.userName = this.getUserInfo();
  }

  public logout(): void {
    this.authorizationService.logout();
  }

  public getUserInfo(): string {
    let userName: string = '';

    console.log('Trying to get user info...');

    this.subscription = this.authorizationService.getUserInfo()
      .subscribe((login: string) => {

        console.log('Login in subscription' + login);

        if (login === null || login.length === 0) {
          this.authorizationService.logout();
          this.router.navigate(['/login']);
        } else {
          userName = login;
        }
      });

    return userName;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
