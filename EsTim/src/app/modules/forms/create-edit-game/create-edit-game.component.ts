import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-create-edit-game',
  templateUrl: './create-edit-game.component.html',
  styleUrls: ['./create-edit-game.component.css']
})
export class CreateEditGameComponent implements OnInit, OnChanges{

  constructor() {
    console.log("hola perro1");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
        
  }
  
  ngOnInit(): void {
      
  }
  
}
