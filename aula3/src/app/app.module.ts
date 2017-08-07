import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ModuloAula3 } from './moduloaula3/modulo-aula3.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloAula3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
