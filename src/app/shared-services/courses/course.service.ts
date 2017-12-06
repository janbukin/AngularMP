import { Injectable } from '@angular/core';
import { Response, Request, Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Course } from '../../shared-models/course.model';

@Injectable()
export class CourseService {
    private courses: Course[];

    constructor(private http: Http) { }

    public get(): Course[] {
        //return Observable.of(this.courses).map((o: any) => o);
        return this.courses;
    }
}
