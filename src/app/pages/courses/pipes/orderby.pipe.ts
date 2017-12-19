import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'app/shared/models/course.model';

@Pipe({
    name: 'orderByDate'
})

export class OrderByPipe implements PipeTransform {
    public transform(courses: Course[], direction: string) {
        if (direction === 'asc') {
            return courses.sort((a: Course, b: Course) => {
                return a.createdDate.getTime() - b.createdDate.getTime();
            });
        } else if (direction === 'desc')  {
            return courses.sort((a: Course, b: Course) => {
                return b.createdDate.getTime() - a.createdDate.getTime();
            });
        } else {
            return courses;
        }
    }
}
