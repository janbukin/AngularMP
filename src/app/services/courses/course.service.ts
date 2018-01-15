import { Injectable } from '@angular/core';
import { Response, Request, Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Course } from '../../shared/models/course.model';

@Injectable()
export class CourseService {
    private courses: Observable<any[]>;

    constructor(private http: Http) {
        let courseArray = [
            {id: 1, title: 'Video course 1', duration: 88, date: new Date(2018, 1, 12), topRated: false, description: 'Ante laborum massa, suspendisse sed adipiscing lectus magna, congue consectetuer aliquam quis magna tincidunt animi, lacus faucibus aliquam sed, neque wisi ac in arcu mi velit. In sit neque nibh faucibus vel. Felis eget id sed at. Eget mauris. Metus morbi quis consectetuer dictumst, pellentesque non, eu lectus non feugiat vel elementum, non commodo duis, magna accumsan.'},
            {id: 2, title: 'Video course 2', duration: 15, date: new Date(2017, 12, 2), topRated: true, description: 'Ante laborum massa, suspendisse sed adipiscing lectus magna, congue consectetuer aliquam quis magna tincidunt animi, lacus faucibus aliquam sed, neque wisi ac in arcu mi velit. In sit neque nibh faucibus vel. Felis eget id sed at. Eget mauris. Metus morbi quis consectetuer dictumst, pellentesque non, eu lectus non feugiat vel elementum, non commodo duis, magna accumsan.'},
            {id: 3, title: 'Video course 3', duration: 135, date: new Date(2017, 12, 17), topRated: false, description: 'In dictum ultricies sed. Massa elit posuere sit scelerisque, nullam commodi, wisi litora interdum tortor. Nulla quam rutrum, mollis odio wisi ac tempus, vehicula wisi tristique eget maecenas, suspendisse et neque elit nonummy arcu congue.'},
            {id: 4, title: 'Video course 4', duration: 45, date: new Date(2018, 1, 11), topRated: false, description: 'Est penatibus nulla proin eleifend integer nonummy, non consequuntur vestibulum donec nullam penatibus, sociis elementum morbi, consequat ut eget sociis. Integer lacinia ligula blandit vestibulum, commodo volutpat quam quis, pede suspendisse aliquam duis non lectus praesent, proin justo, pede sit sit nec. Ut donec pellentesque et cum, per faucibus ac eu.'}
        ];

        this.courses = Observable.of(courseArray);
    }

    public getAll(): Observable<Course[]> {
        return this.courses
            .map((courses: Course[]) => courses
                .filter((x: Course) => {
                    return x.date.getDate() > (new Date().getDate() - 14);
                }
            ));
    }

    public getById(id: number): Observable<Course> {
        return this.courses
            .map((courses: Course[]) => courses.find((course: Course) => course.id === id));
    }

    public create(course: Course): Observable<Course> {
        this.courses
            .map((courses: Course[]) => courses.push(course));

        return Observable.of(course);
    }

    public update(newCourse: Course): Observable<Course> {
        this.courses
            .map((courses: Course[]) => {
                let oldCourse = courses.find((course: Course) => course.id === newCourse.id);
                let index = courses.indexOf(oldCourse, 0);
                if (index > -1) {
                    courses.splice(index, 1, newCourse);
                }
            });

        return this.getById(newCourse.id);
    }

    public delete(id: number): boolean {
        this.courses
            .map((courses: Course[]) => {
                let courseForDelete = courses.find((course: Course) => course.id === id);
                let index = courses.indexOf(courseForDelete, 0);
                if (index > -1) {
                    courses.splice(index, 1);
                }
            });

        return true;
    }
}
