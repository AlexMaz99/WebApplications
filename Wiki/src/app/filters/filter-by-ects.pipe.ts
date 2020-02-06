import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filterByEcts'
})
export class FilterByEctsPipe implements PipeTransform {

  transform(items: Course[], searchText: number): Course[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    const x = searchText.toString();
    return items.filter(it => {
      return it.ects.toString().includes(x);
    });
  }

}
