import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { routes } from './save-course.routes';
import { SaveCourseComponent } from './save-course.component';
import { CourseService } from 'app/services';
import { SharedModule } from 'app/shared/modules';

@NgModule({
    declarations: [
        SaveCourseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routes,
        SharedModule
    ],
    providers: [CourseService]
})

export class SaveCourseModule {

}
