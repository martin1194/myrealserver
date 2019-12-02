import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BearingModule} from './bearing/bearinglist/bearing.moudule';
import { BearingService } from "./bearing/bearinglist/bearing.service";

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { BearingListComponent } from './bearing/bearinglist/';

import {TableBasicExample} from './bearing/bearinglist';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    appRoutingModule,
    BearingModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent,
    RegisterComponent,
    LoginComponent, 
    BearingListComponent,
    TableBasicExample
  ],
  entryComponents: [BearingListComponent,TableBasicExample],
  providers: [BearingService,BearingListComponent,TableBasicExample],
  bootstrap:    [ AppComponent,BearingListComponent,TableBasicExample],
  exports: [BearingModule,],
})
export class AppModule { }
