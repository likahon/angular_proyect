import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetGamesService } from 'src/app/services/get-games.service';

export interface Game {
  id: number;
  img: string;
  name: string;
  company: string;
  category: string;
  requirements: {
    cpu: string;
    ram: string;
    gpu: string;
    os: string;
  };
  price: number;
}

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent {

  // games_catalog: Game[] = [];
  game?:Game;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private gamesService: GetGamesService) {
console.log(this.activatedRoute.snapshot.params['id'])

    this.gamesService.getGameById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.game = data;
    });
  }

editGame(){
  this.router.navigate(['/edit-game', 1, 'edit-game', 1], {state: {id:1, name: 'Red Dead Redemption 2', price: 10000}});
}

  
}
