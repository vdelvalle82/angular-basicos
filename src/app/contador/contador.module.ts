import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import {CommonModule} from '@angular/common';


//decorador
@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        CommonModule
    ]

})


//exporto la clase
export class ContadorModule{}