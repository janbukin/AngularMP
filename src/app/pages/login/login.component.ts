import { Component, Input } from '@angular/core';

import { AuthorizationService } from 'app/shared/services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.styles.scss' ]
  })
  export class LoginComponent {
    @Input() public loginName: string;
    @Input() public password: string;

    constructor(private authorizationService: AuthorizationService) { }

    public login(): void {
      this.authorizationService.login();
      console.log('Logged in');
    }

  }
