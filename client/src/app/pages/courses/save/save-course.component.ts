import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Course } from 'app/shared/models/course.model';
import { DurationPipe } from 'app/shared/pipes';
import { CourseService } from 'app/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'save-course',
    templateUrl: './save-course.component.html',
    styleUrls: [ './save-course.styles.scss' ]
  })
  export class SaveCourseComponent implements OnInit, OnDestroy {
    public course: Course;
    public subscription: Subscription;

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
      this.subscription = this.courseService.getById(id)
        .subscribe((course: Course) => this.course = course);
    }

    public save(): void {
      if (typeof this.course.id === 'undefined' || this.course.id === null) {
        this.course = this.courseService.create(this.course);
        console.log('new course is created');
      } else {
        this.courseService.update(this.course);
      }

      this.router.navigate(['/courses']);
    }

    public cancel(): void {
      this.router.navigate(['/courses']);
    }

    public ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  }
