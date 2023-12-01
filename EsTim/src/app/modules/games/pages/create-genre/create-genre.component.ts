import { Component } from '@angular/core';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent {

  title: string = 'Crear género';
  button_type: string = 'Crear género';
  habilitar: boolean = false;

  funcionDelBoton(){
    console.log('Funcion del boton');
    
  }
  
}
