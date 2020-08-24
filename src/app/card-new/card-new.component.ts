import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {

  cardId: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  
  createNewCard() {   
    if (this.cardId<99999999 || !this.cardId){
      alert("Invalid card№");
    } else {
      this.http.get("http://localhost:3000/create-card?uid=" + this.cardId)
      .subscribe(response => {
        this.router.navigate(["cards"])
      })
    } 
  }

}
