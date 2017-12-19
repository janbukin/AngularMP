import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'app/shared/models/course.model';

@Pipe({
    name: 'searchByTitle'
})

export class SearchPipe implements PipeTransform {
    public transform(courses: Course[], query: string) {
        if (!query) {
            return courses;
        }

        return courses.filter((course: Course) => course.title.indexOf(query) !== -1);
    }
}
