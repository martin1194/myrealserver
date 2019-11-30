import { Component, OnInit } from '@angular/core';

import { bearing } from './bearing';
import { BearingService } from './bearing.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  cars: bearing[];
  error = '';
  success = '';
        
  constructor(private carService: BearingService) {
  }
        
  ngOnInit() {
    this.getCars();
  }
        
  getCars(): void {
  }
}
