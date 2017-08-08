import { Component, Input } from '@angular/core';

@Component({
    selector: 'tar-filho-um',
    templateUrl: './filho-um.component.html',
    styleUrls: ['./filho-um.component.css']
})
export class FilhoUmComponent {

    @Input('valor')
    valor: string;

}