
import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = "Ironman";
    edad  : number = 45


    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
      //return this.nombre + '-' + this.edad
      //los vaptips `` sirven para insertar valores
      //es lo mismo que lo de arriba
        return `${this.nombre} - ${this.edad} `;
    }
    
    cambiarNombre():void {
        this.nombre ='Spiderman';
    }
    cambiarEdad():void{
        this.edad = 30;
    }

}