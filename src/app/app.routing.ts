import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthComponent } from './components/auth/auth.component';

// import { ReservaComponent } from './components/reserva/reserva.component';
// import { TarifesComponent } from './components/tarifa/tarifa.component';
// import { ServeisComponent } from './components/serveis/serveis.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    // {path: 'tarifes', component: TarifesComponent},
    // {path: 'reserva', component: ReservaComponent},
    // {path: 'serveis', component: ServeisComponent},
    // {path: 'coneixens', component: ConeixensComponent},
    // {path: 'contact', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'auth',component:AuthComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: HomeComponent},

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);