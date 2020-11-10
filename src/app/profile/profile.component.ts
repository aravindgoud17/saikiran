import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }
  
  updateName() {
    this.name.setValue('helloooooo');
  }

}
