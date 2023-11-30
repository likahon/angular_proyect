import { Component } from '@angular/core';

@Component({
  selector: 'app-create-games',
  templateUrl: './create-games.component.html',
  styleUrls: ['./create-games.component.css']
})
export class CreateGamesComponent {

  title: string = 'Crear juego';
  button_type: string = 'Crear juego';
  habilitar: boolean = false;

  funcionDelBoton(){
    console.log('Funcion del boton');
    
  }
  
}
