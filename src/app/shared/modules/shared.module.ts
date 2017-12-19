import { NgModule } from '@angular/core';

import { BorderHighlightDirective } from '../../shared/directives';

@NgModule({
    declarations: [ BorderHighlightDirective ],
    exports: [ BorderHighlightDirective ]
})
export class SharedModule {}
