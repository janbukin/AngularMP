import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BorderHighlightDirective } from 'app/shared/directives';
import { DurationPipe, OrderByPipe } from 'app/shared/pipes';
import { DateInputComponent, DurationInputComponent } from 'app/shared/components';

@NgModule({
    declarations: [
        BorderHighlightDirective,
        DurationPipe,
        OrderByPipe,
        DateInputComponent,
        DurationInputComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        BorderHighlightDirective,
        DurationPipe,
        OrderByPipe,
        DateInputComponent,
        DurationInputComponent
    ]
})
export class SharedModule {}
