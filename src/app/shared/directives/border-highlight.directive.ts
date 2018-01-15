import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[borderHighlight]'
})

export class BorderHighlightDirective implements OnInit {
    @Input() public date: Date;

    constructor(private el: ElementRef) {}

    public ngOnInit() {
        let currentDate = new Date();
        if (this.date < currentDate &&
            this.date.getDate() >= currentDate.getDate() - 14) {
            this.el.nativeElement.style.borderColor = 'lightseagreen';
        }
        if (this.date > currentDate) {
            this.el.nativeElement.style.borderColor = 'lightblue';
        }
    }
}
