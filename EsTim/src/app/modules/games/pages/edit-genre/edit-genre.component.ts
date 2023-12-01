import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent {

  title: string = 'Editar genero';
  button_type: string = 'Editar genero';
  habilitar: boolean = false;

}
