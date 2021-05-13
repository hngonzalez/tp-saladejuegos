import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { HomeComponent } from './general/pages/home/home.component';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './general/components/menu/menu.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { EncuestaComponent } from './access/components/encuesta/encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MensajesFirestoreService } from './services/mensajes-firestore-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MensajesFirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
