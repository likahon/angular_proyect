import { Component } from '@angular/core';

interface game_list {
  id: number;
  name: string;
  reqPC: { [key: string]: string };
  genre: number;
  price: string;
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

    games_list: game_list[] = [
      {
        id: 1,
          name: "Fuego Fantástico",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 1,
          price: "20 USD",
          game_type: "Full"
      },
      {
        id: 2,
          name: "Carrera Estelar",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 3,
          price: "30 USD",
          game_type: "Full"
      },
      {
        id: 3,
          name: "Batalla de Leyendas",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 5,
          price: "15 USD",
          game_type: "DLC"
      },
      {
        id: 4,
          name: "Mundos Perdidos",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 2,
          price: "25 USD",
          game_type: "Full"
      },
      {
        id: 5,
          name: "Imperio Oculto",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 1,
          price: "18 USD",
          game_type: "Full"
      },
      {
        id: 6,
          name: "Asalto Espacial",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 3,
          price: "40 USD",
          game_type: "DLC"
      },
      {
        id: 7,
          name: "Oasis de Fantasía",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 6,
          price: "35 USD",
          game_type: "Full"
      },
      {
        id: 8,
          name: "Guerreros del Tiempo",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 1,
          price: "50 USD",
          game_type: "Full"
      },
      {
        id: 9,
          name: "La Leyenda del Guardián",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 2,
          price: "22 USD",
          game_type: "DLC"
      },
      {
        id: 10,
          name: "Invasión Cibernética",
          reqPC: {
            pc_cpu: "Intel Core i5",
            pc_ram: "8GB",
            pc_hdd: "40GB"
          },
          genre: 3,
          price: "33 USD",
          game_type: "Full"
      }
    ];

    games_genres: game_genres[] = [
        {
            id: 1,
            name: "Aventura",
            game_pegi: "18"
        },
        {
            id: 2,
            name: "Terror",
            game_pegi: "18"
        },
        {
            id: 3,
            name: "FPS",
            game_pegi: "13"
        },
        {
            id: 4,
            name: "MMORPG",
            game_pegi: "15"
        },
        {
            id: 5,
            name: "RPG",
            game_pegi: "9"
        },
        {
            id: 6,
            name: "Aentura Gráfica",
            game_pegi: "9"
        },
    ];




}
