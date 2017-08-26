import { Aula5Component } from './aula5.component';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: Aula5Component
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);