import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'app/shared/models/course.model';
import { DurationPipe } from 'app/shared/pipes';
import { CourseService } from 'app/services';

@Component({
    selector: 'save-course',
    templateUrl: './save-course.component.html',
    styleUrls: [ './save-course.styles.scss' ]
  })
  export class SaveCourseComponent implements OnInit, OnDestroy {
    public course: Course = {} as Course;
    public subscription: Subscription;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private courseService: CourseService
    ) { }

    public ngOnInit() {
      let id: string;
      this.route.params.subscribe((data) => {
        id = data['id'];
      });

      if (typeof id === 'undefined' || id === null) {
        this.course.date = new Date();
      } else {
        this.load(+id);
      }
    }

    public load(id: number): void {
      this.subscription = this.courseService.getById(id)
        .subscribe((course: Course) => this.course = course);
    }

    public onSubmit(): void {
      this.save();
    }

    public save(): void {
      if (typeof this.course.id === 'undefined' || this.course.id === null) {
        this.subscription = this.courseService.create(this.course)
          .subscribe((course: Course) => this.course = course);
      } else {
        this.courseService.update(this.course);
      }

      this.router.navigate(['/courses']);
    }

    public cancel(): void {
      this.router.navigate(['/courses']);
    }

    public ngOnDestroy(): void {
      if (typeof this.subscription !== 'undefined' && this.subscription !== null) {
        this.subscription.unsubscribe();
      }
    }
  }
