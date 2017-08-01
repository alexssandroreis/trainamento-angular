import { Component } from '@angular/core';

@Component({
    selector: 'ngr-component1',
    templateUrl: 'component1.component.html',
    styleUrls: ['component1.component.css']

})
export class Component1 {

    titulo: string = 'Nosso primeiro componente';

    constructor() { }
}