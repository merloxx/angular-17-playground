import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase',
  standalone: true
})
export class MyUpperCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return 'My: ' + value.toUpperCase();
  }
}
