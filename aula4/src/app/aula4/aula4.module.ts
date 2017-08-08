import { FilhoTresComponent } from './filho-tres.component';
import { FilhoDoisComponent } from './filho-dois.component';
import { FormsModule } from '@angular/forms';
import { FilhoUmComponent } from './filho-um.component';
import { PaiComponent } from './pai.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        PaiComponent, 
        FilhoUmComponent,
        FilhoDoisComponent,
        FilhoTresComponent
    ], 
    exports: [
        PaiComponent
    ]
})
export class Aula4Module {
    
}