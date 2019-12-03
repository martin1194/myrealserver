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

import { BearingModule } from './bearing.moudule';

export interface Bearing {
  brand_name: string;
  bearing_model_number: string;
  amount: string;
  bearing_id: string;
}

const ELEMENT_DATA: Bearing[] = [
  {brand_name: "3", bearing_model_number: "Hydrogen", amount: "1", bearing_id: "3"},
  {brand_name: "2", bearing_model_number: "Helium", amount: "4", bearing_id: "3"},
  {brand_name: "1", bearing_model_number: "Lithium", amount: "6", bearing_id: "3"},
  {brand_name: "1", bearing_model_number: "Lithium", amount: "6", bearing_id: "3"},
  {brand_name: "1", bearing_model_number: "Lithium", amount: "6", bearing_id: "3"},
  {brand_name: "1", bearing_model_number: "Lithium", amount: "6", bearing_id: "3"},
];




@Component({ 
  selector: 'bearinglist.component',
  templateUrl: "bearinglist.component.html",
  styleUrls: ["bearinglist.component.css"] })
export class BearingListComponent implements OnInit {
  displayedColumns: string[] = ["brand_name", "bearing_model_number", "amount", "bearing_id"];
  dataSource = new MatTableDataSource<Bearing>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  bearings: Bearing[];
  constructor(private bearingService: BearingService) {}
  ngOnInit() {
    this.getbearings();
  }
  ngAfterContentInit() {
  }
  getbearings(): void {
    this.bearingService.getAll().subscribe(
      (res: Bearing[]) => {
        this.bearings = res;
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
      },
      err => {
        this.error = err;
      }   
    );
  }
  
  dataSource2 = new MatTableDataSource(this.bearings);
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



