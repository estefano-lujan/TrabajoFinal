import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms'
import { FormularioComponent } from
'./components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule ({
declarations: [
AppComponent,
FormularioComponent,
ListaComponent
],
imports: [
BrowserModule,
AppRoutingModule,
ReactiveFormsModule,
HttpClientModule,
],
providers: [],
 bootstrap: [AppComponent] 
})
export class AppModule { }

