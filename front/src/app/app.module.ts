import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/add/add.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
