import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
constructor(private router: Router) {
console.log(this.router.getCurrentNavigation()?. extras.state?.['alumno']); //PRUEBAS PARA PASAR ESTADOS ENTRE COMPONENTES

  }
}
