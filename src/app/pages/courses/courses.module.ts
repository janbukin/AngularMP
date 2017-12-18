import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routes } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CourseTileComponent } from './course-tile';
import { ToolboxModule } from 'app/shared/components';
import { CourseService } from 'app/services';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseTileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routes,
        ToolboxModule
    ],
    providers: [CourseService]
})

export class CoursesModule {

}
