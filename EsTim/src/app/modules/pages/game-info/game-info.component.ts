import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Game{
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
@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent {

  games_catalog: Game[] = [];
  game?:Game;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.games_catalog = [
      {
        id: 1,
        img: "half-life2.jpeg",
        name: "Half Life 2",
        company: "Valve",
        category: "Shooter",
        requeriments:{
          cpu: "Intel i5",
          ram: "8GB",
          gpu: "Nvidia GTX1080",
          os: "Windows XP"
        },
        price: 5000
      },
      {
        id: 2,
        img: "red-dead-redemption.jpeg",
        name: "Red Dead Redemption 2",
        company: "Rockstar Games",
        category: "Shooter",
        requeriments:{
          cpu: "Intel i7",
          ram: "8GB",
          gpu: "Nvidia RTX3050",
          os: "Windows 10"
        },
        price: 10000
      }
    ];

    this.game = this.games_catalog.find(
      (game) => game.id == this.activatedRoute.snapshot.params['id']
    );

  }

editGame(){
  this.router.navigate(['/edit-game', 1, 'edit-game', 1], {state: {id:1, name: 'Red Dead Redemption 2', price: 10000}});
}

  
}
