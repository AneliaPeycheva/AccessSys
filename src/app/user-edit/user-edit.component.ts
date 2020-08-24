import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  uid: any;
  name: any;
  cardId: any;
  companyId: any;
  departmentId: any;
  availableCards:any=[];

  constructor(public dataServ: DatabaseService, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dataServ
      .getUsers();

    this.dataServ
      .getCards();

    this.dataServ
      .getCompanies();

    this.dataServ
      .getDepartments();

    this.uid = this.route.snapshot.queryParams['uid'];
    this.name = this.route.snapshot.queryParams['name'];
    this.cardId = this.route.snapshot.queryParams['cardId'];
    this.companyId = this.route.snapshot.queryParams['companyId'];
    this.departmentId = this.route.snapshot.queryParams['departmentId'];

    this.availableCards=this.dataServ.returnAvailableCards();   
    let myCard = this.dataServ.returnCards().filter(card=>card.uid == this.cardId)[0];
    this.availableCards.unshift(myCard);
  }

  editUser() {  
    this.http.get("http://localhost:3000/edit_user?uid=" + this.uid + "&name=" + this.name + "&cardId=" + this.cardId + "&companyId=" + this.companyId + "&departmentId=" + this.departmentId)
      .subscribe(response => {
        this.dataServ
        .getUsers();
        this.dataServ
      .getCompanies();
        this.router.navigate(["users"])
      })
  }

}
