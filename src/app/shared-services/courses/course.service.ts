import { Injectable } from '@angular/core';
import { Response, Request, Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Course } from '../../shared-models/course.model';

@Injectable()
export class CourseService {
    private courses: Course[];

    constructor(private http: Http) {
        this.courses = [
            new Course(1, 'Video course 1', 88, new Date(), 'With this, any object which implements the MyInterface will need to implement all function calls of arrays and only will be able to store objects with the MyType type.'),
            new Course(2, 'Video course 2', 15, new Date(), 'With this, any object which implements the MyInterface will need to implement all function calls of arrays and only will be able to store objects with the MyType type.'),
            new Course(3, 'Video course 3', 135, new Date(), 'With this, any object which implements the MyInterface will need to implement all function calls of arrays and only will be able to store objects with the MyType type.'),
            new Course(4, 'Video course 4', 45, new Date(), 'With this, any object which implements the MyInterface will need to implement all function calls of arrays and only will be able to store objects with the MyType type.'),
     ];
    }

    public get(): Course[] {
        //return Observable.of(this.courses).map((o: any) => o);
        return this.courses;
    }
}
