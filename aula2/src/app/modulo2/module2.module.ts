import { NgModule } from '@angular/core';

import { Component2 } from './component2.component';

export * from './component2.component';

@NgModule({
    declarations: [Component2],
    exports: [Component2]
})
export class Module2 {

}