import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { game_list } from '../pages/games/games.component';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { 
    
   }
   getGames(){
     return this.http.get<game_list[]>('http://localhost:3000/games');
   }

   getGamesById(id: number){
    return this.http.get<game_list>(`http://localhost:3000/games/${id}`);
     
   }
}
