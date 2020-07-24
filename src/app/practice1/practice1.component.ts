import { Component, OnInit } from '@angular/core';
import * as datamembers from './../data.json';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.scss'],
})
export class Practice1Component implements OnInit {
  datamembers: any = (datamembers as any).default;
  editdata = false;

  constructor() {}

  ngOnInit(): void {}

  edit() {
    this.editdata = !this.editdata;
  }
  delete(i: any) {
    // console.log(i)
    this.datamembers.splice(i, 1);
  }
}
