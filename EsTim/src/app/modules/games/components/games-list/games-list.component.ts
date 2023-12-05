import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';

export interface game_list {
  id: number;
  name: string;
  // reqPC: { [key: string]: string };
  genre: number;
  price: number;
  game_type: string;
}

interface game_genres {
  id: number;
  name: string;
  game_pegi: string;

}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {

  games_list!: any[];
  games_genres: game_genres[] = [];

  constructor(private gameService: GamesService) { 
    
    
    
    
    this.gameService.getGames().subscribe(data =>{
      this.games_list = data;
      // return this.games_list;
    });
  }
}
