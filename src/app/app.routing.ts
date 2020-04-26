import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
// import { ReservaComponent } from './components/reserva/reserva.component';
// import { TarifesComponent } from './components/tarifa/tarifa.component';
// import { ServeisComponent } from './components/serveis/serveis.component';

const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    // {path: 'tarifes', component: TarifesComponent},
    // {path: 'reserva', component: ReservaComponent},
    // {path: 'serveis', component: ServeisComponent},
    // {path: 'coneixens', component: ConeixensComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: AboutComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);