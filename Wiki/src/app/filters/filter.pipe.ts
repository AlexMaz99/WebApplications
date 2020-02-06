import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Course[], searchText: string): Course[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
