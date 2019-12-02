import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BearinglModule} from './bearing/bearinglist/bearing.moudule';
import { BearingService } from "./bearing/bearinglist/bearing.service";

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { BearingListComponent } from './bearing/bearinglist';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    appRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    BearinglModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent,
    RegisterComponent,
    LoginComponent, 
    BearingListComponent,
    
  ],
  entryComponents: [],
  providers: [BearingService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
