import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filterBySemester'
})
export class FilterBySemesterPipe implements PipeTransform {

  transform(items: Course[], searchText: number): Course[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    const x = searchText.toString();
    return items.filter(it => {
      return it.semester.toString().includes(x);
    });
  }

}
