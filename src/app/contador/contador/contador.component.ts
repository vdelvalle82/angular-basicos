 
 import { Component } from "@angular/core";


 //añado export para poder usar esta clase
 //fuera de este archivo
 @Component({
     selector:'app-contador',
     template:`
     
         <h1>{{ titulo }}</h1>
         <h3>La base es:
                <strong>55</strong>
         </h3>

        <button (click)="acumular(base)"> + {{base}}</button>
        <span> {{ numero }}</span>
        <button (click)="acumular(-base)"> - {{base }}</button>
     
     `
 })

 export class ContadorComponent{
     titulo:string = 'Contador App';
      //creo propiedad para contador
      numero: number = 10;
      base: number= 5;
      
      acumular(valor: number){
      this.numero += valor;
    }

 }