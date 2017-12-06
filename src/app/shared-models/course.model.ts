export interface ICourse {
    id: number;
    title: string;
    duration: number;
    date: Date;
    description: string;
}

export class Course implements ICourse {
    public id: number;
    public title: string;
    public duration: number;
    public date: Date;
    public description: string;

    constructor(id: number, title: string, duration: number, date: Date, description: string) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.date = date;
        this.description = description;
    }
}
