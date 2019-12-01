import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BearingListComponent } from './bearing/bearinglist';


const routes: Routes = [
    { path: '', component: HomeComponent, outlet: '' },
    { path: 'login', component: LoginComponent, outlet: '' },
    { path: 'register', component: RegisterComponent, outlet: '' },

    //bearing表
    { path: 'bearing/bearinglist', component: BearingListComponent, outlet: '' },

    // otherwise redirect to home
    { path: '**', redirectTo: '', outlet: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);