import { Component, OnInit } from '@angular/core';

import { BearingService } from './bearing.service';

@Component({ templateUrl: 'bearinglist.component.html' })


export class BearingListComponent implements OnInit {
  bearings: Bearing[];
  error = '錯誤';
  success = '成功';
        
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
  }}

export class Bearing {
  constructor(
    brand_name: string,
    model_number: string,
    amount:   number,
    bearing_id?: number) {}
}