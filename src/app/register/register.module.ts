import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: RegisterComponent, pathMatch: 'full'}
    ]),
    FormsModule,
  ]
})
export class RegisterModule {

}
