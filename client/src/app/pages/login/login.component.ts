import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'app/shared/services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.styles.scss' ]
  })
  export class LoginComponent implements OnDestroy {
    @Input() public userName?: string;
    @Input() public password?: string;
    public subscription: Subscription;

    constructor(
      private authorizationService: AuthorizationService, private router: Router) { }

    public login(): void {
      if (!this.userName) {
        return;
      }

      this.subscription = this.authorizationService.login(this.userName, this.password)
        .subscribe(() => this.router.navigate(['']));
    }

    public ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  }
