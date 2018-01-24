import { NgModule } from '@angular/core';

import { BorderHighlightDirective } from 'app/shared/directives';
import { DurationPipe, OrderByPipe } from 'app/shared/pipes';

@NgModule({
    declarations: [
        BorderHighlightDirective,
        DurationPipe,
        OrderByPipe
    ],
    exports: [
        BorderHighlightDirective,
        DurationPipe,
        OrderByPipe
    ]
})
export class SharedModule {}
