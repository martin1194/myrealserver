import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HelloComponent } from './hello.component';


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
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
