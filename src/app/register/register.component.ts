import { Component, OnInit } from '@angular/core';
import { HttpMyService } from '../services/httpService.service';
import { AuthUser } from '../models/authUser';
import { Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'app-register-view',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']

})
export class RegisterComponent implements OnInit {
    user: AuthUser = new AuthUser();
    header: Headers = new Headers();
    options: RequestOptions = new RequestOptions({ headers: this.header });
    constructor(private httpService: HttpMyService) {
        this.header.append('Content-Type', 'application/x-www-form-urlencoded');
        this.options = new RequestOptions({ headers: this.header });
    }
    ngOnInit() {
        /*this.httpService.fetchData('http://localhost:8080/users/all').subscribe(data => {
            console.log(data);
        });*/
    }
}
