import { Injectable } from '@angular/core';
import {
    Response,
    Request,
    Http,
    RequestOptions,
    RequestMethod,
    URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Course } from 'app/shared/models/course.model';
import { CourseDto } from 'app/shared/models/course-dto.model';
import { RequestQuery } from 'app/shared/models/request-query.model';

@Injectable()
export class CourseService {
    private baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3004';
    }

    public getAll(query: RequestQuery): Observable<Course[]> {
        let requstOptions = new RequestOptions();
        let request: Request;
        let urlParams: URLSearchParams = new URLSearchParams();

        urlParams.set('start', String(query.start));
        urlParams.set('count', String(query.count));
        urlParams.set('sort', query.sort);
        requstOptions.url = `${this.baseUrl}/courses`;
        requstOptions.method = RequestMethod.Get;
        requstOptions.search = urlParams;
        request = new Request(requstOptions);

        return this.http.request(request)
            .map((res: Response) => res.json())
            .map((courses: CourseDto[]) => courses.map(this.convertCourse));
    }

    public getById(id: number): Observable<Course> {
        let requstOptions = new RequestOptions();
        let request: Request;

        requstOptions.url = `${this.baseUrl}/courses/${id}`;
        requstOptions.method = RequestMethod.Get;
        request = new Request(requstOptions);

        return this.http.request(request)
            .map((res: Response) => res.json())
            .map((course: CourseDto) => this.convertCourse(course));
    }

    public create(course: Course): Course {
        return course;
    }

    public update(newCourse: Course): Observable<Course> {
        return this.getById(newCourse.id);
    }

    public delete(id: number): Observable<boolean> {
        let requstOptions = new RequestOptions();
        let request: Request;

        requstOptions.url = `${this.baseUrl}/courses/${id}`;
        requstOptions.method = RequestMethod.Delete;
        request = new Request(requstOptions);

        return this.http.request(request)
            .map((res: Response) => res.json());
    }

    private convertCourse(dto: CourseDto): Course {
        return {
            id: dto.id,
            title: dto.name,
            duration: dto.length,
            date: dto.date,
            topRated: dto.isTopRated,
            description: dto.description };
    }
}
