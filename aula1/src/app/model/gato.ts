import { Animal } from './../interface/animal.interface';

export abstract class Gato implements Animal {
    
    comer(alimento: string): void {
        console.log(`Gato comeu ${alimento}`);
    }

    abstract cor() : string;
}