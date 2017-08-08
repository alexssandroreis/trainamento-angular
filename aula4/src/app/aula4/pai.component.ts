import { FilhoTresComponent } from './filho-tres.component';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'tar-pai',
    templateUrl: './pai.component.html',
    styleUrls: ['./pai.component.css']
})

export class PaiComponent {

    @ViewChild(FilhoTresComponent)
    filhoTresComponent: FilhoTresComponent;

    valorFilhoUm: string = '';
    valorFilhoDois: number = 0;

    valorFilhoTres: string = '';
    valorRecuperado: string = '';

    onAtualizarValorHandler(event) {
        this.valorFilhoDois = event;
    }

    atualizarValorFilhoTres() {
        this.filhoTresComponent.setValor(this.valorFilhoTres);
    }

    recuperarValorDoFilhoTres() {
        this.valorRecuperado = this.filhoTresComponent.getValor();
    }

}