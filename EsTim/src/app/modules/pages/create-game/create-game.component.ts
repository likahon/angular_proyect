import { Component } from '@angular/core';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {

  title_form:string = 'Crear Juego';

  habilitar:boolean = true;

 funcionDelBoton(){
   this.habilitar = false;
 }

}
