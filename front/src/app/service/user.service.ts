import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get('http://localhost:1212/user');
  }
  addUser(p:any)
  {
    return this.http.post('http://localhost:1212/add',p);
  }
  updatedUser(p:any){
    let res = p._id;
    return this.http.put(`http://localhost:1212/update/${res}`,p);
  }
}
