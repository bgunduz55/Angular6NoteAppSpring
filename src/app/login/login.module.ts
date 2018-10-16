import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LoginComponent, pathMatch: 'full'},
    ]),
    FormsModule,
  ]
})
export class LoginModule {

}
