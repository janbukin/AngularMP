import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'app/shared/models/course.model';
import { DurationPipe } from 'app/shared/pipes';

@Component({
    selector: 'course-tile',
    templateUrl: './course-tile.component.html',
    styleUrls: [ './course-tile.styles.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class CourseTileComponent {
    @Input() public course: Course;
    @Output() public delete: EventEmitter<number> = new EventEmitter<number>();

    public onDelete() {
        this.delete.emit(this.course.id);
      }

    public edit(): void {
        console.log(this.course.id + ' will be edited');
    }
  }
