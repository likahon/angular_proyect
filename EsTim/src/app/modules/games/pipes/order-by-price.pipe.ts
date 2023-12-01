import { Pipe, PipeTransform } from '@angular/core';

interface game_list {
  id: number;
  name: string;
  reqPC: { [key: string]: string };
  genre: number;
  price: number;
  game_type: string;
}

@Pipe({
  name: 'orderByPrice'
})
export class OrderByPricePipe implements PipeTransform {

  transform(games: game_list[]): game_list[] {
    if (!games || !games.length) {
      return games;
    }

    return [...games].sort((a, b) => a.price - b.price);
  }

}