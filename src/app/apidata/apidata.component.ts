import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.scss'],
})
export class ApidataComponent implements OnInit {
  [x: string]: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.url).subscribe((Response: any) => {
      console.log(Response);
    });
  }
}
