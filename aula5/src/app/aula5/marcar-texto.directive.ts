import { element } from 'protractor';

import { Directive, ElementRef, Input, AfterViewChecked, HostListener } from "@angular/core";

@Directive({
    selector: '[marcadorTexto]'
})
export class MarcadorDirective {
    
    @Input('marcadorTexto')
    cor: string;

    element: ElementRef;

    constructor(element: ElementRef) {
        this.element = element;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.mudarMarcador('green');
    } 

    @HostListener('mouseleave') onMouseLeave() {
        this.mudarMarcador(this.cor);
    } 

    @HostListener('keyup', ['$event']) onKeyUp($event) {      
        if (isNaN($event.key)) {
            let value = this.element.nativeElement.value 
            this.element.nativeElement.value = value.substring(0, value.length - 1);
        }

    }

    private mudarMarcador(cor: String): void {
        this.element.nativeElement.style.backgroundColor = cor;
    }

}