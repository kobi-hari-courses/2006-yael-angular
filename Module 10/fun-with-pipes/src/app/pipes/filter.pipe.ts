import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter', 
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, keyword: any): string[] {
    if (!value) return;

    const filterString : string = 
        (typeof(keyword) === 'string') 
        ? keyword 
        : String(keyword);

    if (value instanceof Array) {
      return value
              .map(v => String(v))
              .filter(v => v.includes(filterString));
    }

    return [];
  }

}
