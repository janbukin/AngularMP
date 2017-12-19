import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'durationHm'
})

export class DurationPipe implements PipeTransform {
    public transform(duration: number) {
        if (duration < 60) {
            return duration + 'min';
        } else {
            let hours = Math.floor(duration / 60);
            let minutes = duration % 60;
            return hours + 'h ' + minutes + 'min';
        }
    }
}
