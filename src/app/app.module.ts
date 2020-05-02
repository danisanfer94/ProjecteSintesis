import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { CreateXoferComponent } from './components/create-xofer/create-xofer.component';
import { CreateCotxeComponent } from './components/create-cotxe/create-cotxe.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { DetailCotxeComponent } from './components/detail-cotxe/detail-cotxe.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { DetailXoferComponent } from './components/detail-xofer/detail-xofer.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { EditCotxeComponent } from './components/edit-cotxe/edit-cotxe.component';
import { EditXoferComponent } from './components/edit-xofer/edit-xofer.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthComponent } from './components/auth/auth.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ViatgeDetailsComponent } from './components/viatge-details/viatge-details.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    CreateXoferComponent,
    CreateCotxeComponent,
    ContactComponent,
    HomeComponent,
    DetailCotxeComponent,
    DetailClientComponent,
    DetailXoferComponent,
    EditClientComponent,
    EditCotxeComponent,
    EditXoferComponent,
    ErrorComponent,
    AuthComponent,
    ReservaComponent,
    ViatgeDetailsComponent,
    PanelAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    appRoutingProviders,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
