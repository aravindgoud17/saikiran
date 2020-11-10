import { Component, OnInit } from '@angular/core';
import { VirtualAction } from 'rxjs';

@Component({
  selector: 'app-aravind',
  templateUrl: './aravind.component.html',
  styleUrls: ['./aravind.component.scss'],
})
export class AravindComponent implements OnInit {
  datas = [
    {
      img: 'assets/dhoni.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi, ratione fugit assumenda impedit veritatis illum minima sunt accusantium quae officiis ipsam voluptatem nisi nemo, quisquam, possimus corporis ad corrupti.',
      avatar: 'assets/dhoni.jpg',
    },
    {
      img: 'assets/dhoni.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi, ratione fugit assumenda impedit veritatis illum minima sunt accusantium quae officiis ipsam voluptatem nisi nemo, quisquam, possimus corporis ad corrupti.',
      avatar: 'assets/dhoni.jpg',
    },
    {
      img: 'assets/dhoni.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi, ratione fugit assumenda impedit veritatis illum minima sunt accusantium quae officiis ipsam voluptatem nisi nemo, quisquam, possimus corporis ad corrupti.',
      avatar: 'assets/dhoni.jpg',
    },
    {
      img: 'assets/dhoni.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi, ratione fugit assumenda impedit veritatis illum minima sunt accusantium quae officiis ipsam voluptatem nisi nemo, quisquam, possimus corporis ad corrupti.',
      avatar: 'assets/dhoni.jpg',
    },
    {
      img: 'assets/dhoni.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi, ratione fugit assumenda impedit veritatis illum minima sunt accusantium quae officiis ipsam voluptatem nisi nemo, quisquam, possimus corporis ad corrupti.',
      avatar: 'assets/dhoni.jpg',
    },
    {
      img: 'assets/dhoni.jpg',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi, ratione fugit assumenda impedit veritatis illum minima sunt accusantium quae officiis ipsam voluptatem nisi nemo, quisquam, possimus corporis ad corrupti.',
      avatar: 'assets/dhoni.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
