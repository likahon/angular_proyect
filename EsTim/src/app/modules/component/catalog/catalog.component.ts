import { Component } from '@angular/core';

interface Game{
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
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  games_catalog: Game[] = [];
  ngOnInit(): void {
    this.games_catalog = [
      {
        id: 1,
        img: "../../../../assets/img/games-catalog/half-life2.jpeg",
        name: "Half Life 2",
        company: "Valve",
        category: "Shooter",
        requeriments:{
          cpu: "Intel i5",
          ram: "8GB",
          gpu: "Nvidia GTX1080",
          os: "Windows"
        },
        price: 5000
      },
      {
        id: 2,
        img: "../../../../assets/img/games-catalog/red-dead-redemption.jpeg",
        name: "Red Dead Redemption 2",
        company: "Rockstar Games",
        category: "Shooter",
        requeriments:{
          cpu: "Intel i7",
          ram: "8GB",
          gpu: "Nvidia RTX3050",
          os: "Windows"
        },
        price: 5000
      }
    ]
  }
}
