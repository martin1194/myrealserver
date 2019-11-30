import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { bearing } from './bearing';

@Injectable({
  providedIn: 'root'
})
export class BearingService {baseUrl = 'http://treeeee-bear.com/back-end';
bearing: Bearing[];
                
constructor(private http: HttpClient) { }
                
getAll(): Observable<Bearing[]> {
  return this.http.get(`${this.baseUrl}/list`).pipe(
    map((res) => {
      this.bearing = res['data'];
      return this.bearing;
  });
}
}



