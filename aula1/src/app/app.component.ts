import { Carro } from './model/carro';
import { Moto } from './model/moto';
import { TestGenerics } from './generics/test-generics';
import { GatoMarrom } from './model/gato.marrom';
import { Animal } from './interface/animal.interface';
import { Cachorro } from 'app/model/cachorro';
import { Gato } from 'app/model/gato';
import { Component } from '@angular/core';

var teste1: string = '';
const teste2: string = '';
let teste3 = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    gato = new GatoMarrom();
    cachorro: Cachorro =  new Cachorro();

    moto = new Moto();
    carro =  new Carro();

    public animalComeu(animal: Animal, alimento: string) : void {
      animal.comer(alimento);

      this.carro =  this.moto;

      this.carro = {
        roda1: '',
        espelho:  ''
      }

    }

    public corDoGato(): void {
      console.log(this.gato.cor());
    }

    public testar() : void {
      let genericsTest: TestGenerics<string> =  new TestGenerics<string>();
      genericsTest.test('teste');
      genericsTest.test2<number>(1);
      genericsTest.test2<string>('dsds');
    }

 
}
