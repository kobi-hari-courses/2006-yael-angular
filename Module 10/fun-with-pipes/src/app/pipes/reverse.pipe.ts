import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): string {
    if (typeof(value) === 'string') {
      let a = value.split('');
      let r = a.reverse();
      let res = r.join('');
      return res;

    } else {
      return '';
    }
  }

}
