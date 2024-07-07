import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private ser:UserService,private route:Router,private rout:ActivatedRoute){}
  userName:any;
  userAge:any;
  userEmail:any;
  user:any;
  editUser = String;
  ngOnInit(){
    const id = this.rout.snapshot.params['id'];
    console.log('id',id);
  }
  addUser(){
    this.user = {
      "name":this.userName,
    "email":this.userEmail,
    "age":this.userAge
    }
    console.log(this.user)
    this.ser.addUser(this.user).subscribe(
      
      (r)=>{if(r=="-1"){
        alert("error occured")}
        else{
          alert("your product is saved");
          this.route.navigateByUrl('/user')}
        }
      );
    this.route.navigateByUrl('/user');
  }

}
