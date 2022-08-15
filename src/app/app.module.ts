import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './pages/prueba/prueba.component';

import { BootstrComponent } from './pages/bootstr/bootstr.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { PruebamodalComponent } from './pages/prueba/pruebamodal/pruebamodal.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BootstrComponent,
   PruebamodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
   
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
