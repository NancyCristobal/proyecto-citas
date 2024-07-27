import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  standalone: true,
  imports: [],
  templateUrl: './list-citas.component.html',
  styleUrl: './list-citas.component.css'
})
export class ListCitasComponent {
  @Input() listadoCitas:any;
  @Output() deleteCita = new EventEmitter<number>();
  eliminarCita(index:number){
    this.deleteCita.emit(index);
  }
}
