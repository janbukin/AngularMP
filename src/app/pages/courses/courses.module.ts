import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './courses.routes';

import { CoursesComponent } from './courses.component';
import { CourseTileComponent } from './course-tile/course-tile.component';
import { ToolboxModule } from '../../shared-components';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseTileComponent
    ],
    imports: [
        CommonModule,
        routes,
        ToolboxModule
    ]
})

export class CoursesModule {

}
