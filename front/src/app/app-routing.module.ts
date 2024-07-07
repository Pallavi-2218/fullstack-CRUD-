import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'add',component:AddComponent},
  {path:'user/:id',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
