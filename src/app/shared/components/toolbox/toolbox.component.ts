import { Component, Input } from '@angular/core';

@Component({
    selector: 'toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls: [ './toolbox.styles.scss' ]
  })
  export class ToolboxComponent {
    @Input() public query: string;

    public find() {
      console.log(this.query);
    }
  }
