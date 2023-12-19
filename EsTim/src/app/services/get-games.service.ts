import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../modules/pages/game-info/game-info.component';

@Injectable({
  providedIn: 'root'
})
export class GetGamesService {

  constructor(private http: HttpClient) { 

    

  }
  getGames(){
    return this.http.get<Game[]>('http://localhost:3000/games');
  }

  getGameById(id: number){
    return this.http.get<Game>(`http://localhost:3000/games/${id}`);
    
  }
}
