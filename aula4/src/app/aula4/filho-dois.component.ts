import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tar-filho-dois',
    templateUrl: './filho-dois.component.html',
    styleUrls: ['./filho-dois.component.css']
})
export class FilhoDoisComponent {

    @Output("atualizarValorHandler")
    atualizarValorHandler = new EventEmitter();

    valorAtualizado: number = 1;

    atualizarValor() {
        this.atualizarValorHandler.emit(this.valorAtualizado++);
    }
}