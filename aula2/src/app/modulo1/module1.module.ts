import { Module2, Component2 } from './../modulo2/module2.module';
import { NgModule } from '@angular/core';

import { Component1 } from './component1.component';

@NgModule({
    imports: [Module2],
    declarations: [Component1],
    exports: [Component1]
})
export class Module1 {

    

}