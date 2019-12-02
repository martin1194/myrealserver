import { BearingService } from "./bearing.service";
import {MatTableModule} from '@angular/material/table';
import { Ng2SmartTableModule } from "ng2-smart-table";
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
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {BearingModule} from './bearing.moudule';

export interface Bearing {
  brand_name: string;
  model_number: string;
  amount: number;
  bearing_id: number;
}


@Component({ 
  selector: 'bearinglist.component',
  templateUrl: "bearinglist.component.html",
  styleUrls: ["bearinglist.component.css"] })
export class BearingListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  bearings: Bearing[];
  constructor(private bearingService: BearingService) {}
  ngOnInit() {
    this.getbearings();
    this.dataSource.data = this.bearings;
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
  dataSource2 = new MatTableDataSource(this.bearings);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    billing:any[]=[];


}



  export class Bearing1 {
  constructor(
    brand_name: string,
    model_number: string,
    amount: number,
    bearing_id?: number
  ) {}
}




export class TableBasicExample {
  displayedColumns: string[] = ['brand_name', 'model_number', 'amount', 'bearing_id'];
}