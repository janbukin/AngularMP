import { Component, Input } from '@angular/core';

@Component({
    selector: 'breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: [ './breadcrumbs.styles.scss' ]
  })
  export class BreadcrumbsComponent {
    @Input() public currentPage: String;

    constructor() { }
  }
