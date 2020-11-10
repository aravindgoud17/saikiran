import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
  goldPrice=59000;
  array1=['sai','aravind','vig','dd']

  sample1() {
    return  this.http.get<any>("https://api.npoint.io/6dac4d8e59bf90f86a8d")
  }
 ngOnInit(){
  
 }
}
