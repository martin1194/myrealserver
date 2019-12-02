import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BearingModule} from './bearing/bearinglist/bearing.moudule';
import { BearingService } from "./bearing/bearinglist/bearing.service";

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { BearingListDataSource } from './bearing/bearinglist/bearinglist-datasource';

import {TableBasicExample} from './bearing/bearinglist';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    appRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    BearingModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent,
    RegisterComponent,
    LoginComponent, 
    BearingListDataSource,
    
  ],
  entryComponents: [BearingListDataSource],
  providers: [BearingService,TableBasicExample,BearingListDataSource],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
