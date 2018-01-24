import _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: true
})

export class OrderByPipe implements PipeTransform {
    public transform(array: any[], field: string, direction: string) {
        //return _.orderBy(array, [field], [direction]);
        return array;
    }
}
