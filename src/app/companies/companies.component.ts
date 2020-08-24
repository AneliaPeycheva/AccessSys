import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  company: any;
  viewDep: boolean = false;
  currentCompany:any = { uid:0 };
  newDepartmentName:any;

  constructor(public dataServ: DatabaseService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.dataServ
      .getCompanies();
  }

  deleteCompanies(company) {
    this.http
      .get("http://localhost:3000/delete_company?uid=" + company.uid)
      .subscribe(response => {
        this.dataServ
          .getCompanies();
      });
  }

  viewDepartments(company) {
    this.viewDep = true;
  }

  viewInModal(company){
    this.currentCompany = company;
  }

  addNewDepartment(company) {    
    let companyId = company['uid']
    let companyName = company['name']  

    this.router.navigate(['departments'],
      { queryParams: { companyId: companyId, companyName: companyName } });
  }

  addDepartmentInModal(company){
    this.currentCompany = company;
  }

  createNewDepartment() {
 
    this.http.get("http://localhost:3000/create-department?name=" + this.newDepartmentName + "&companyId=" + this.currentCompany.uid)
      .subscribe(response => {
        this.dataServ
          .getCompanies();
        this.dataServ
          .getDepartments();
          
       
      })
  }
}
