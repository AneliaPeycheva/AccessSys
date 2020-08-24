import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  users: any = [];
  cards: any = [];
  companies: any = [];
  departments: any = [];

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get("http://localhost:3000/get_users")
      .subscribe(response => {
        this.users = response;      
      });
  }

  returnUsers() {
    return this.users;
  }

  getCards() {
    this.http
      .get("http://localhost:3000/get_cards")
      .subscribe(response => {
        this.cards = response;
      });
  }

  returnCards() {
    return this.cards;
  }

  returnAvailableCards() {
    return this.cards.filter(card => card.flag < 1);
  }

  getCompanies() {
    this.http
      .get("http://localhost:3000/get_companies")
      .subscribe(response => {
        this.companies = response;
      });
  }

  returnCompanies() {
    return this.companies;
  }

  returnCompanyName(companyId) {
   let company_name = this.companies.filter(comp => comp.uid == companyId);
   if (company_name.length > 0)
   {
     return company_name[0].name;
   }
   else {
     return "";
   }   
  }

  getDepartments() {
    this.http
      .get("http://localhost:3000/get_departments")
      .subscribe(response => {
        this.departments = response;
      });
  }

  returnDepartments(companyId) {
    return this.departments.filter(dep => dep.companyId == companyId);
  }

  returnDepartmentNameByCompanyId(companyId, departmentId) {
    let department_name = this.departments.filter(dep => dep.uid == departmentId && dep.companyId == companyId);
    if (department_name.length > 0) {
      return department_name[0].name;
    } else {
      return "";
    }
  }
}
