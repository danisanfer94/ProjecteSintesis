import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthComponent } from './components/auth/auth.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ViatgeDetailsComponent } from './components/viatge-details/viatge-details.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { PerfilClientComponent } from './components/perfil-client/perfil-client.component';
import { ViatgesClientComponent } from './components/viatges-client/viatges-client.component';
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { CookiesComponent } from './components/cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent,
    AuthComponent,
    ReservaComponent,
    ViatgeDetailsComponent,
    PanelAdminComponent,
    PerfilClientComponent,
    ViatgesClientComponent,
    TarifaComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [
    appRoutingProviders,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
