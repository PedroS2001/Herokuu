import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  numeroUno : number = 0;
  numeroDos : number = 0;
  suma : number = 0;
  promedio : number = 0;



  miMetodo()
  {
    this.title = "Titulo cambiado por la funcion"
  }

  Calcular()
  {
    this.suma = (Number) (this.numeroUno + this.numeroDos);
    this.promedio = this.suma / 2 ;

  }

  Limpiar()
  {
    this.title = '';
    this.numeroUno = 0;
    this.numeroDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
