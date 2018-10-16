import { Component, OnInit } from '@angular/core';
import { HttpMyService } from '../services/httpService.service';
import { AuthUser } from '../models/authUser';
import { Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Router } from '@angular/router';
import * as data_json from '../../assets/globaltext.json';

@Component({
    selector: 'app-login-view',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
    user: AuthUser = new AuthUser();
    header: Headers = new Headers();
    options: RequestOptions = new RequestOptions({ headers: this.header });
    constructor(private httpService: HttpMyService, private router: Router) {
        // this.header.append('Content-Type', 'application/x-www-form-urlencoded');
        this.options = new RequestOptions({ headers: this.header });
    }
    ngOnInit() {
    }
    login() {
        const body = new FormData();
        body.set('username', `${this.user.username}`);
        body.set('password', `${this.user.password}`);
        this.httpService.postData(data_json['rest_url'] + '/auth/login', body, this.options).subscribe(data => {
            this.user = data;
            localStorage.setItem('authUser', JSON.stringify(this.user));
            console.log(this.user);
            this.router.navigate(['/']);
        });
    }
}
