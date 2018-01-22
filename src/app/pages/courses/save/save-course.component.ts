import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Course } from 'app/shared/models/course.model';
import { DurationPipe } from 'app/shared/pipes';
import { CourseService } from 'app/services';

@Component({
    selector: 'save-course',
    templateUrl: './save-course.component.html',
    styleUrls: [ './save-course.styles.scss' ]
  })
  export class SaveCourseComponent implements OnInit {
    public course: Course;

    constructor(private route: ActivatedRoute, private courseService: CourseService) {}

    public ngOnInit() {
      this.load();
    }

    public load(): void {
      let id: number = 1;
      this.courseService.getById(id)
        .subscribe((data) => this.course = data);

      // this.route.params
      //   .switchMap((params: Params) => this.courseService.getById(+params['id']))
      //   .subscribe((course: Course) => this.course = course);
    }

    public save(): void {
      console.log('Save');
    }

    public cancel(): void {
      console.log('Cancel');
    }
  }
