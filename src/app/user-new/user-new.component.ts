import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  name: any;
  companyId: any;
  departmentId: any;
  uid: any;
  cardId: any = '0';

  constructor(
    private route: ActivatedRoute,
    public dataServ: DatabaseService,
    private http: HttpClient,
    private router: Router
  ) { }

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

  createNewUser() {
    if (this.cardId == undefined) {
      this.cardId = '';     
    }  
    this.http.get("http://localhost:3000/create_user?name=" + this.name + "&cardId=" + this.cardId + "&companyId=" + this.companyId + "&departmentId=" + this.departmentId)
      .subscribe(response => {
        this.router.navigate(["users"])
      })
  }

}
