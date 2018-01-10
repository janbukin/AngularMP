import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routes } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CourseTileComponent } from './course-tile';
import { CreateCourseComponent } from './create';
import { ToolboxModule } from 'app/shared/components';
import { CourseService } from 'app/services';
import { SharedModule } from 'app/shared/modules';
import { SearchPipe } from 'app/pages/courses/pipes';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseTileComponent,
        CreateCourseComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        routes,
        ToolboxModule,
        SharedModule
    ],
    providers: [CourseService]
})

export class CoursesModule {

}
