import { NgModule } from '@angular/core';

import { BorderHighlightDirective } from 'app/shared/directives';
import { DurationPipe } from 'app/shared/pipes';

@NgModule({
    declarations: [ BorderHighlightDirective, DurationPipe ],
    exports: [ BorderHighlightDirective, DurationPipe ]
})
export class SharedModule {}
