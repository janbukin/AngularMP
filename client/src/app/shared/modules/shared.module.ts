import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BorderHighlightDirective } from 'app/shared/directives';
import { DurationPipe, OrderByPipe } from 'app/shared/pipes';
import { DateInputComponent, DurationInputComponent } from 'app/shared/components';

@NgModule({
    declarations: [
        BorderHighlightDirective,
        DurationPipe,
        OrderByPipe,
        DateInputComponent
        //DurationInputComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        BorderHighlightDirective,
        DurationPipe,
        OrderByPipe,
        DateInputComponent
        //DurationInputComponent
    ]
})
export class SharedModule {}
