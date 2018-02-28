import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { CourseTileComponent } from './course-tile';
import { ToolboxModule } from 'app/shared/components';
import { CourseService } from 'app/services';
import { SharedModule } from 'app/shared/modules';
import { SearchPipe } from 'app/pages/courses/pipes';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseTileComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ToolboxModule,
        SharedModule
    ],
    providers: [CourseService]
})

export class CoursesModule {

}
