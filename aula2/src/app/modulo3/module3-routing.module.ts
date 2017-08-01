import { Component3 } from './component3.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    { 
        path: '', 
        component: Component3
    }
];

export const routing: ModuleWithProviders = 
              RouterModule.forChild(routes);