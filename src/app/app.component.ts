import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearCitaComponent } from './componentes/crear-cita/crear-cita.component';
import { ListCitasComponent } from './componentes/list-citas/list-citas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CrearCitaComponent,
    ListCitasComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-citas';
  listCitas:any[] =[];

  agregarCita(cita: any){
    console.log(cita);
    this.listCitas.push(cita);
    console.log(this.listCitas);
  }
  eliminarCitaListado(index:number){
    this.listCitas.splice(index,1);
  }
}
