import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public dataServ: DatabaseService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.dataServ
      .getUsers();    
    this.dataServ
      .getCards();
    this.dataServ
      .getCompanies();
    this.dataServ
      .getDepartments();
  }

  editUser(user) {
    let userId = user['uid'];
    let userName = user['name'];
    let userCardId = user['cardId'];
    let userCompanyId = user['companyId'];
    let userDepartmentId = user['departmentId'];
    this.router.navigate(['user-edit'],
      { queryParams: { uid: userId, name: userName, cardId: userCardId, companyId: userCompanyId, departmentId: userDepartmentId } });
  }

  deleteUser(user) {
    this.http
      .get("http://localhost:3000/delete_user?userId=" + user.uid + "&cardId=" + user.cardId)
      .subscribe(response => {
        this.dataServ
          .getUsers();
        this.dataServ
          .getCards();
        this.dataServ
          .getCompanies();
        this.dataServ
          .getDepartments();
      });
  }

}
