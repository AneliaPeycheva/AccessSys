import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentName: any;
  companyId: any;
  companyName: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, public dataServ: DatabaseService) { }

  ngOnInit(): void {
    this.dataServ
      .getCompanies();

    this.companyId = this.route.snapshot.queryParams['companyId'];
    this.companyName = this.route.snapshot.queryParams['companyName']
  }

  createNewDepartment() {
    this.http.get("http://localhost:3000/create-department?name=" + this.departmentName + "&companyId=" + this.companyId)
      .subscribe(response => {
        this.dataServ
          .getCompanies();
        this.dataServ
          .getDepartments();
          
        this.router.navigate(["companies"])
      })
  }

}
