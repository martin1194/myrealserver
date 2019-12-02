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
import {DataSource} from '@angular/cdk/collections';

import {BearingListDataSource} from './bearinglist-datasource';

@Component({ 
  selector: 'bearinglist.component',
  templateUrl: "bearinglist.component.html",
  styleUrls: ["bearinglist.component.css"] })



export class TableBasicExample {
  displayedColumns: string[] = ['brand_name', 'model_number', 'amount', 'bearing_id'];
}
