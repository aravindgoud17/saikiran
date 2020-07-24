import { Component } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data1:any=data;
  constructor() { }

  ngOnInit() {
    // console.log(this.data1)
  }
}
