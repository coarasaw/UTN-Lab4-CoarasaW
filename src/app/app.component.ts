import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 1 - Edades ';
  // tslint:disable-next-line:no-inferrable-types
  public edad1: string = '';
  // tslint:disable-next-line:no-inferrable-types
  public edad2: string = '';
  // tslint:disable-next-line:no-inferrable-types
  public varSuma: string = '';
  // tslint:disable-next-line:no-inferrable-types
  public varPromedio: string = '';

  // tslint:disable-next-line:typedef
  Promedio(){
    // tslint:disable-next-line:radix
    // tslint:disable-next-line:whitespace
    // tslint:disable-next-line:radix
    this.varPromedio = String(((parseInt(this.edad1) + parseInt(this.edad2))) / 2);
  }

  // tslint:disable-next-line:typedef
  Sumar(){
    // tslint:disable-next-line:radix
    // tslint:disable-next-line:whitespace
    // tslint:disable-next-line:radix
    this.varSuma = String(parseInt(this.edad1) + parseInt(this.edad2));
  }
  // tslint:disable-next-line:typedef
  Limpiar()
  {
    this.edad1 = '';
    this.edad2 = '';
    this.varPromedio = '';
    this.varSuma = '';
  }
}
