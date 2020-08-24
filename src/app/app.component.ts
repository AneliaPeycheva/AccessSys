import { Component } from '@angular/core';
import {DatabaseService} from './database.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AccessSys';
 
  constructor(public dataServ:DatabaseService){

  this.dataServ
    .getUsers();
  
  this.dataServ
    .getCards();
  
  this.dataServ
    .getCompanies();
  
  this.dataServ
  .getDepartments();
  
  }
 
}
