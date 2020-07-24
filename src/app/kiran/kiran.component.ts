import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiran',
  templateUrl: './kiran.component.html',
  styleUrls: ['./kiran.component.scss'],
})
export class KiranComponent implements OnInit {
  covid = [
    {
      img: 'assets/virat.jpg',
      name: 'virat',
      age: 35,
      testRuns: 42000,
      odiRuns: 2500,
    },
    {
      img: 'assets/dhoni.jpg',
      name: 'dhoni',
      age: 38,
      testRuns: 50000,
      odiRuns: 25000,
    },
    {
      img: 'assets/raina.jpg',
      name: 'raina',
      age: 36,
      testRuns: 15000,
      odiRuns: 20000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
