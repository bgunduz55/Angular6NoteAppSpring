import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { routing } from './routing';
import { HttpMyService } from './services/httpService.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './authGuard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    FormsModule,
    routing,
    HttpClientModule,
    MainModule,
    TransferHttpCacheModule,
  ],
  providers: [HttpMyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
