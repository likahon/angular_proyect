import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortyBy'
})
export class SortyByPipe implements PipeTransform {

  transform(products: any[], desc: boolean = true): any[] {
    if (!products || products.length === 0) return [];

    return products.sort((a, b) => {
      if (desc) {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });
  }

}
