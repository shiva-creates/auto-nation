import { Routes } from '@angular/router';
import { DealersComponent } from './dealers/dealers.component';
import { CarsComponent } from './cars/cars.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dealers', pathMatch: 'full' },
    { path: 'dealers', component: DealersComponent },
    { path: 'cars/:id', component: CarsComponent },
];
