import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './authGuard';


export const routes = [
    { path: '', component: MainComponent, pathMatch: 'full' , canActivate: [AuthGuard] },
    { path: '*', loadChildren: './main/main.module#MainModule' , canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule', canActivateChild: [AuthGuard] },
    { path: 'register', loadChildren: './register/register.module#RegisterModule', canActivateChild: [AuthGuard] }
];
export const routing = RouterModule.forRoot(routes);
