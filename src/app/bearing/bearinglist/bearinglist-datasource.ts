
import { BearingService } from "./bearing.service";
import {
AfterViewInit,
ChangeDetectorRef,
Component,
ElementRef,
HostListener,
OnInit,
ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatSort} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';


import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';








export interface Bearing {
  brand_name: string;
  model_number: string;
  amount: number;
  bearing_id: number;
}

export class Bearing1 {
  constructor(
    brand_name: string,
    model_number: string,
    amount: number,
    bearing_id?: number
  ) {}
}


export class BearingListDataSource implements OnInit {
  bearings: Bearing[];
  error = "錯誤";
  success = "成功";
  constructor(private bearingService: BearingService) {}
  ngOnInit() {
    this.getbearings();
    this.dataSource.paginator = this.paginator;
  }

  getbearings(): void {
    this.bearingService.getAll().subscribe(
      (res: Bearing[]) => {
        this.bearings = res;
      },
      err => {
        this.error = err;
      }
    );
  }
  dataSource = new MatTableDataSource(this.bearings);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    billing:any[]=[];


}


