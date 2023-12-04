import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

export interface game_genres {
  id: number;
  name: string;
  game_pegi: string;

}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent {
  games_list: game_list[] = [];
  games_all?: game_list;

constructor(private activatedRoute: ActivatedRoute){
  console.log(this.activatedRoute.snapshot.params['id']);

  

      this.games_list = [
        {
          id: 1,
            name: "Fuego fantástico",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 1,
            price: 20,
            img: "../../../../assets/img/half_life_2.png",
            game_type: "Full"
        },
        {
          id: 2,
            name: "Carrera Estelar",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 3,
            price: 30,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "Full"
        },
        {
          id: 3,
            name: "Batalla de Leyendas",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 5,
            price: 15,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "DLC"
        },
        {
          id: 4,
            name: "Mundos Perdidos",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 2,
            price: 25,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "Full"
        },
        {
          id: 5,
            name: "Imperio Oculto",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 1,
            price: 18,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "Full"
        },
        {
          id: 6,
            name: "Asalto Espacial",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 3,
            price: 40,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "DLC"
        },
        {
          id: 7,
            name: "Oasis de Fantasía",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 6,
            price: 35,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "Full"
        },
        {
          id: 8,
            name: "Guerreros del Tiempo",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 1,
            price: 50,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "Full"
        },
        {
          id: 9,
            name: "La Leyenda del Guardián",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 2,
            price: 22,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "DLC"
        },
        {
          id: 10,
            name: "Invasión Cibernética",
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB",
            genre: 3,
            price: 33,
            img: "https://www.mundodeportivo.com/alfabeta/hero/2021/06/Attack-on-Titan.1656677272.2635.jpg?width=1200",
            game_type: "Full"
        }
      ];

      
      this.games_all = this.games_list.find(game => game.id == this.activatedRoute.snapshot.params['id']);
  console.log(this.games_all);
  
  }
}