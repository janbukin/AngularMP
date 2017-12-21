import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'app/shared/models/course.model';

@Pipe({
    name: 'searchByTitle',
    pure: true
})

export class SearchPipe implements PipeTransform {
    public transform(courses: Course[], query: string) {
        if (!query) {
            return courses;
        }
        let lowerCaseQuery = query.toLowerCase();

        return courses.filter((course: Course) =>
            course.title.toLowerCase().indexOf(lowerCaseQuery) !== -1
        );
    }
}
