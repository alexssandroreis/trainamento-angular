import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tar-filho-tres',
    templateUrl: './filho-tres.component.html',
    styleUrls: ['./filho-tres.component.css']
})
export class FilhoTresComponent {

    valor: string = '';

    setValor(valor: string) {
        this.valor = valor;
    }

    getValor() : string {
        return this.valor;
    }

}