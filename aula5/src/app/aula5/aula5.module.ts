import { MarcadorDirective } from './marcar-texto.directive';
import { routing } from './aula5-routing.module';
import { Aula5Component } from './aula5.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations:[
        Aula5Component,
        MarcadorDirective
    ]
})
export class Aula5Module {

}