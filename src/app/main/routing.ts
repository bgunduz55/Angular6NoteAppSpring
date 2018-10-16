import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';


export const routes = [
    { path: '', component: MainComponent, pathMatch: 'full'}
  ];
export const routing = RouterModule.forChild(routes);
