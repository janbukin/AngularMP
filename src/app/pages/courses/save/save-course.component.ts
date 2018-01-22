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

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private courseService: CourseService
    ) {}

    public ngOnInit() {
      let id: string = this.route.params['id'];

      if (typeof id === 'undefined' || id === null) {
        this.course = { date: new Date() } as Course;
        console.log('initialization of course');
      } else {
        this.load(+id);
      }
    }

    public load(id: number): void {
      this.courseService.getById(id)
        .subscribe((data) => this.course = data);

      // this.route.params
      //   .switchMap((params: Params) => this.courseService.getById(+params['id']))
      //   .subscribe((course: Course) => this.course = course);
    }

    public save(): void {
      if (typeof this.course.id === 'undefined' || this.course.id === null) {
        this.courseService.create(this.course)
          .subscribe((data) => {
            this.course = data;
            console.log('new course is created');
          });

      } else {
        this.courseService.update(this.course);
      }

      console.log(this.course);

      let courses: Course[];
      this.courseService.getAll()
        .subscribe((data) => courses = data);

      console.log(courses);

      this.router.navigate(['/courses']);
    }

    public cancel(): void {
      this.router.navigate(['/courses']);
    }
  }
