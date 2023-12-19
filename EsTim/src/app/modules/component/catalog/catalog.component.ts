import { Component } from '@angular/core';
import { GetGamesService } from 'src/app/services/get-games.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  games_catalog!: any[];

  constructor(private gamesService: GetGamesService) {

  this.gamesService.getGames().subscribe(data => {
      this.games_catalog = data;
    });    
  }

}
