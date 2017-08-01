import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    { 
        path: 'lazy', 
        loadChildren: './modulo3/modulo3.module#Module3'
    }
];

export const routing: ModuleWithProviders = 
              RouterModule.forRoot(routes);