import { NgModule, OnInit } from '@angular/core';
import { MainComponent } from './main.component';
import { routing } from '../routing';
import { NavbarComponent } from './navbar/navbar.component';
import { MainFeedComponent } from './mainFeed/mainFeed.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, NavbarComponent, MainFeedComponent],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ]
})
export class MainModule {

}
