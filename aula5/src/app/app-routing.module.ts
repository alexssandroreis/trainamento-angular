import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        path: 'aula5',
        loadChildren: './aula5/aula5.module#Aula5Module'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);