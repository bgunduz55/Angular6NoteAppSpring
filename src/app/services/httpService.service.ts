import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable()
export class HttpMyService {

  constructor(private http: HttpClient) { }
  fetchData(url, options?): any {
    return this.http.get(url, options).pipe(
      );
    // .map((x: Response) =>  x.json() ) ;
  }
  postData(url, body, options): any {
  return this.http.post(url, body, options )
  .pipe();


}
}
