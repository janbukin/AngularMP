import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[borderHighlight]'
})

export class BorderHighlightDirective implements OnInit {
    @Input() public createdDate: Date;

    constructor(private el: ElementRef) {}

    public ngOnInit() {
        let currentDate = new Date();
        if (this.createdDate < currentDate &&
            this.createdDate.getDate() >= currentDate.getDate() - 14) {
            this.el.nativeElement.style.borderColor = 'lightseagreen';
        }
        if (this.createdDate > currentDate) {
            this.el.nativeElement.style.borderColor = 'lightblue';
        }
    }
}
