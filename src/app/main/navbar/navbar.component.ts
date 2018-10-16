import { Component, OnInit } from '@angular/core';
import { HttpMyService } from '../../services/httpService.service';
import { AuthUser } from '../../models/authUser';
import { Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Router } from '@angular/router';
import * as data_json from '../../../assets/globaltext.json';

@Component({
    selector: 'app-navbar-view',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']

})
export class NavbarComponent implements OnInit {
    currentUser: AuthUser = JSON.parse(localStorage.getItem('authUser'));
    constructor(private httpService: HttpMyService, private router: Router) {
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('authUser');
        this.router.navigate(['/login']);
    }
}
