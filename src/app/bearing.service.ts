import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { bearing } from "./bearing";

@Injectable({
  providedIn: "root"
})
export class BearingService {
  baseUrl = "http://treeeee-bear.com/back-end";
  bearings: bearing[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<bearing[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map(res => {
        this.bearings = res["data"];
        return this.bearings;
      }),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError("Error! something went wrong.");
  }
}
