import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortyBy'
})
export class SortyByPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
