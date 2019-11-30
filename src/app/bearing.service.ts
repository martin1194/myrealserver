import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { bearing } from './bearing';

@Injectable({
  providedIn: 'root'
})
export class BearingService {
  constructor(private http: HttpClient) { }
}



