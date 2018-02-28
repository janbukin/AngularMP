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

    if (this.isAuthenticated) {
      this.getUserInfo();
    }
  }

  public logout(): void {
    this.authorizationService.logout();
  }

  public getUserInfo(): void {
    this.subscription = this.authorizationService.getUserInfo()
      .subscribe((login: string) => {
        if (login === null || login.length === 0) {
          this.authorizationService.logout();
          this.router.navigate(['/login']);
        } else {
          this.userName = login;
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
