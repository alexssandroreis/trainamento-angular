import { Component } from '@angular/core';

@Component({
    selector: 'ngr-component2',
    templateUrl: 'component2.component.html',
    styleUrls: ['component2.component.css']

})
export class Component2 {

    titulo: string = 'Nosso segundo componente';

    constructor() { }
}