import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent {

  title_form:string = 'Editar Juego';

  habilitar:boolean = true;

 funcionDelBoton(){
   this.habilitar = false;
 }


}
