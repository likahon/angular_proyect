import { Pipe, PipeTransform } from '@angular/core';

interface game_list{
  id: number;
  img: string;
  name: string;
  company: string;
  category: string;
  requeriments:{
    cpu: string;
    ram: string;
    gpu: string;
    os: string;
  };
  price: number;
}

@Pipe({
  name: 'sortyBy'
})
export class SortyByPipe implements PipeTransform {

  transform(games: game_list[]): game_list[] {
    if (!games || !games.length) {
      return games;
    }

    return [...games].sort((a, b) => a.price - b.price);
  }

}
