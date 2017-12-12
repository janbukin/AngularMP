import { Injectable } from '@angular/core';

import { Course } from '../../shared-models/course.model';
import { CourseDto } from './course.model-dto';

@Injectable()
export class CourseService {
    public mapFrom(dto: CourseDto): Course {
        let course = new Course(
            dto.id,
            dto.title,
            dto.duration,
            dto.date,
            dto.description
        );

        return course;
    }
}
