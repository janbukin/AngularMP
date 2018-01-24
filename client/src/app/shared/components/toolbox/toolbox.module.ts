import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToolboxComponent } from './toolbox.component';

@NgModule({
    declarations: [
        ToolboxComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [ToolboxComponent]
})

export class ToolboxModule {

}
