import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
        BrowserModule,
        routes,
        ToolboxModule
    ]
})

export class CoursesModule {

}
