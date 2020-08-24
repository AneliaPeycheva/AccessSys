import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {
companyName:any;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  createNewCompany(){
    this.http.get("http://localhost:3000/create-company?name=" + this.companyName)
    .subscribe(response => {
      this.router.navigate(["companies"])
    })
  }

 
}
