import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CicloVidaComponent } from './ciclo-vida.component';
import { Componente2Aula3 } from './componente2-aula3.component';
import { ComponenteAula3 } from './componente-aula3.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ComponenteAula3, 
        Componente2Aula3,
        CicloVidaComponent
    ],
    exports: [
        ComponenteAula3, 
        Componente2Aula3,
        CicloVidaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class ModuloAula3 {

}