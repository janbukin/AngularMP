import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'app/shared/models/course.model';

@Component({
    selector: 'toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls: [ './toolbox.styles.scss' ]
  })
  export class ToolboxComponent {
    @Output() public search: EventEmitter<string> = new EventEmitter<string>();

    constructor(private router: Router) {}

    public onSearch(query: string) {
      this.search.emit(query);
    }

    public add() {
      this.router.navigate(['/course']);
    }
  }
