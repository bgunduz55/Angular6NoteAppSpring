import { Component, OnInit } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { AuthUser } from '../models/authUser';
import { HttpMyService } from '../services/httpService.service';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import * as data_json from '../../assets/globaltext.json';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent implements OnInit {
  data = new Array<Object>();
  currentUser: AuthUser = JSON.parse(localStorage.getItem('authUser'));
  header = new HttpHeaders({});
  constructor(private httpService: HttpMyService) {
    this.header.set('Content-Type', 'application/x-www-form-urlencoded');
    this.header = new HttpHeaders({'Authorization': this.currentUser.token});
  }

  ngOnInit() {
    
  }

}
