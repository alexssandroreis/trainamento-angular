import { Animal } from './../interface/animal.interface';

export class Cachorro implements Animal {
    
     comer(alimento: string): void {
        console.log(`Cachorro comeu ${alimento}`);
    }



}