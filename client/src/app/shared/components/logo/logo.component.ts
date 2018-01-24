import { Component } from '@angular/core';

@Component({
    selector: 'logo',
    templateUrl: './logo.component.html',
    styleUrls: [ './logo.styles.scss' ]
  })
  export class LogoComponent {
    public path = 'assets/img/logo.png';
  }
