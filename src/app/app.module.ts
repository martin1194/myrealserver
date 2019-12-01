import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { BearingListComponent } from './bearing/bearinglist';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    appRoutingModule 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent,
    RegisterComponent,
    LoginComponent, 
    BearingListComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
