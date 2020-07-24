import { Component, OnInit } from '@angular/core';
import * as datalist from './../data.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  datalist: any = (datalist as any).default;
  editdata = false;
  constructor() {}

  ngOnInit(): void {}
  edit() {
    this.editdata = !this.editdata;
  }
  delete(i: any) {
    // console.log(i)
    this.datalist.splice(i, 1);
  }
}
