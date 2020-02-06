import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filterByGrade'
})
export class FilterByGradePipe implements PipeTransform {

  transform(items: Course[], searchText: number): Course[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    const x = searchText.toString();
    return items.filter(it => {
      return it.grade.toString().includes(x);
    });
  }

}
