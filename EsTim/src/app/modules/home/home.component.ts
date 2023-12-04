import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router){

  }
  navPrueba() { //PRUEBAS PARA PASAR ESTADOS ENTRE COMPONENTES
this.router.navigate(['/prueba', 1, 'alumno', 1],{state: {alumno:{id: 1, name: 'aluego'}}});
  }
}
