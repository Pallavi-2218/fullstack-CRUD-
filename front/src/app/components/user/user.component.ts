import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private ser:UserService,private route:Router){}
  user:any;
 ngOnInit(){
 
    this.ser.getUser().subscribe((res)=>{
      this.user = res;
      console.log(this.user);
    })
 
 }
 add(){
  this.route.navigateByUrl('/add');
 }
 edit(u:any)
{
  this.route.navigate(['u', u.id, 'details']);

}
}
