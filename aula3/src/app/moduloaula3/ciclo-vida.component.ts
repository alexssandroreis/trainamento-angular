import { 
    Component, 
    OnChanges,
    OnInit, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,    
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'tar-ciclo-vida',
    templateUrl: './ciclo-vida.component.html'
})
export class CicloVidaComponent 
    implements OnChanges, OnInit, DoCheck, AfterContentInit, 
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy     {
    
    variavelTeste: string = 'Teste';

    lista = ['Elemento 1'];

    adicionarElemento() {
        this.lista.push(`Elemento ${this.lista.length + 1}`);
    }

    getValor() {
        return this.variavelTeste;
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }
    
    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }
}