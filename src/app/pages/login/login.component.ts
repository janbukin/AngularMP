import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'app/shared/services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.styles.scss' ]
  })
  export class LoginComponent {
    @Input() public userName?: string;
    @Input() public password?: string;

    constructor(
      private authorizationService: AuthorizationService, private router: Router) { }

    public login(): void {
      if (!this.userName) {
        return;
      }

      this.authorizationService.login(this.userName);
      this.router.navigate(['']);
    }

  }
