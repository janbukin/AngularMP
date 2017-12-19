import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[borderHighlight]'
})

export class BorderHighlightDirective {
    @Input() public createdDate: Date;

    constructor(el: ElementRef, renderer: Renderer) {
        let currentDate = new Date();

        if (this.createdDate < currentDate &&
            this.createdDate.getDate() >= currentDate.getDate() - 14) {
            el.nativeElement.style.borderColor = 'green';
        //renderer.setElementStyle(el.nativeElement, 'borderColor', 'blue');
        } else if (this.createdDate > currentDate) {
            el.nativeElement.style.borderColor = 'blue';
        }
    }
}
