import { Component, Input, OnInit, Output } from '@angular/core';
import { CourseService } from 'app/services';
import { Course } from 'app/shared/models/course.model';
import { SearchPipe } from './pipes';
import { OrderByPipe } from 'app/shared/pipes';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: [ './courses.styles.scss' ],
    providers: [ SearchPipe ]
  })
  export class CoursesComponent implements OnInit {
    public courses: Course[];
    public filteredCourses: Course[];
    private isLoading: boolean = false;

    constructor(private courseService: CourseService, private searchPipe: SearchPipe) {}

    public ngOnInit() {
      this.isLoading = true;
      this.load();
      this.isLoading = false;
    }

    public load(): void {
      this.courses = this.courseService.getAll();
      // .filter((x: Course) => {
      //     return x.date.getDate() > (new Date().getDate() - 14);
      // });

      this.filteredCourses = this.courses;
    }

    public onDelete(id: number): void {
      if (confirm('Do you really want to delete this course?')) {
        this.courseService.delete(id);

        let deletedCourse = this.courses.find((x: Course) => x.id === id);
        this.courses = this.courses.filter((c: Course) => c !== deletedCourse);
        this.filteredCourses = this.filteredCourses.filter((c: Course) => c !== deletedCourse);

        console.log(id + ' is deleted');
      }
    }

    public onSearch(query: string): void {
      this.filteredCourses = this.searchPipe.transform(this.courses, query);
    }
  }
