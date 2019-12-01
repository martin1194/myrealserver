import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";



import { Observable, throwError } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";
import { Bearing } from './bearing';

@Injectable({
  providedIn: "root"
})
export class BearingService {
  baseUrl = "http://treeeee-bear.com/back-end/api";
  bearings: Bearing[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Bearing[]> {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map(res => {
        this.bearings = res['data'];
        return this.bearings;
      }),
      retry(100),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   window.alert(errorMessage);
   return throwError(errorMessage);

    return throwError("Error! something went wrong!!!");
  }
}
