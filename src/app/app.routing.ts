import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthComponent } from './components/auth/auth.component';
import { ErrorComponent } from './components/error/error.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ViatgeDetailsComponent } from './components/viatge-details/viatge-details.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { PerfilClientComponent } from './components/perfil-client/perfil-client.component';
import { ViatgesClientComponent } from './components/viatges-client/viatges-client.component';
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { CookiesComponent } from './components/cookies/cookies.component';

// import { ReservaComponent } from './components/reserva/reserva.component';
// import { ServeisComponent } from './components/serveis/serveis.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'tarifa', component: TarifaComponent},
    // {path: 'reserva', component: ReservaComponent},
    // {path: 'serveis', component: ServeisComponent},
    // {path: 'coneixens', component: ConeixensComponent},
    {path: 'panel-admin',component: PanelAdminComponent},
    {path: 'reserva', component: ReservaComponent},
    {path: 'reserva-details/:idReserva',component:ViatgeDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'contact', component: ContactComponent},
    // {path: 'auth/:origen',component:AuthComponent},
    {path: 'auth/:origen/:logreg',component:AuthComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'perfil-client', component: PerfilClientComponent},
    {path: 'viatges-client', component: ViatgesClientComponent},
    {path: 'cookies', component: CookiesComponent},
    {path: '**', component: ErrorComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);