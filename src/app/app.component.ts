import { Component, OnInit } from '@angular/core';

import { Bearing } from './bearing';
import { BearingService } from './bearing.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  bearings: Bearing[];
  error = '';
  success = '';
        
  constructor(private bearingService: BearingService) {
  }
        
  ngOnInit() {
    this.getbearings();
  }
        
  getbearings(): void {
    this.bearingService.getAll().subscribe(
      (res: Bearing[]) => {
        this.bearings = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }