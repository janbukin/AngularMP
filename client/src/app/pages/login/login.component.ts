import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'app/shared/services';
import 'rxjs/add/operator/map';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.styles.scss' ]
  })
  export class LoginComponent implements OnDestroy {
    @Input() public userName?: string;
    @Input() public password?: string;
    public subscription: Subscription;
    private errorMessage: string;

    constructor(
      private authorizationService: AuthorizationService, private router: Router) { }

    public login(): void {
      if (!this.userName) {
        return;
      }

      this.subscription = this.authorizationService.login(this.userName, this.password)
        .subscribe(
          () => this.router.navigate(['']),
          (error: Response) => this.errorMessage = 'Login or Password is invalid'
          //(error: Response) => error.text().then((res) => this.errorMessage = res)
        );
    }

    public ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  }
