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

@Component({ 
  templateUrl: "bearinglist.component.html",
  styleUrls: ["bearinglist.component.css"] })
export class BearingListComponent implements OnInit {
  bearings: Bearing[];
  error = "錯誤";
  success = "成功";

  constructor(private bearingService: BearingService) {}

  ngOnInit() {
    this.getbearings();
  }

  getbearings(): void {
    this.bearingService.getAll().subscribe(
      (res: Bearing[]) => {
        this.bearings = res;
        dataSource = new MatTableDataSource<data>(this.bearings);
      },
      err => {
        this.error = err;
      }
    );
  }
}

export class Bearing {
  constructor(
    brand_name: string,
    model_number: string,
    amount: number,
    bearing_id?: number
  ) {}
}
