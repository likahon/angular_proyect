import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/modules/games/services/games.service';

export interface game_list {
  id: number;
  name: string;
  pc_cpu: string;
  pc_ram: string;
  pc_hdd: string;
  genre: number;
  price: number;
  img: string;
  game_type: string;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent {
  games_all?: game_list;

  constructor(private activatedRoute: ActivatedRoute, private gameService: GamesService) {

      this.gameService.getGamesById(this.activatedRoute.snapshot.params['id']).subscribe(data =>{
        this.games_all = data;
      })
  }
}