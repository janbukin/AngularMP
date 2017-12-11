import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.styles.scss' ]
  })
  export class FooterComponent {
    private year: number;

    constructor() {
      let date = new Date();
      this.year = date.getFullYear();
    }
  }
