import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { routes } from './courses.routes';

import { CourseTileComponent } from './course-tile/course-tile.component';

@NgModule({
    declarations: [
        CourseTileComponent
    ],
    imports: [
        routes,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})

export class CoursesModule {

}
