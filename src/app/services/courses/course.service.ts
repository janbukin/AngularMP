import { Injectable } from '@angular/core';
import { Response, Request, Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Course } from '../../shared/models/course.model';

@Injectable()
export class CourseService {
    private courses: Course[];

    constructor(private http: Http) {
        this.courses = [
            {id: 1, title: 'Video course 1', duration: 88, date: new Date(), description: 'With this, any object which implements the MyInterface will need to implement all function calls of arrays and only will be able to store objects with the MyType type.'},
            {id: 2, title: 'Video course 2', duration: 15, date: new Date(), description: 'With this, any object which implements the MyInterface will need to implement all function calls of arrays and only will be able to store objects with the MyType type.'},
            {id: 3, title: 'Video course 3', duration: 135, date: new Date(), description: 'With this, any object which implements the MyInterface will need to implement all function calls of arrays and only will be able to store objects with the MyType type.'},
            {id: 4, title: 'Video course 4', duration: 45, date: new Date(), description: 'With this, any object which implements the MyInterface will need to implement all function calls of arrays and only will be able to store objects with the MyType type.'}
        ];
    }

    public getAll(): Course[] {
        return this.courses;
    }

    public getById(id: number): Course {
        return this.courses.find((x: Course) => x.id === id);
    }

    public create(course: Course): Course {
        this.courses.push(course);
        return course;
    }

    public update(course: Course): Course {
        let oldCourse = this.getById(course.id);
        let index = this.courses.indexOf(oldCourse, 0);
        if (index > -1) {
            this.courses.splice(index, 1, course);
        }
        return course;
    }

    public delete(id: number): boolean {
        let course = this.getById(id);
        let index = this.courses.indexOf(course, 0);
        if (index > -1) {
            this.courses.splice(index, 1);
        }
        return true;
    }
}
