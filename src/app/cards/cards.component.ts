import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: any = [];
  card: any;
  constructor(public dataServ: DatabaseService, private http: HttpClient) { }

  ngOnInit(): void {  
    this.dataServ
      .getCards();   
  }

  deleteCard(card) {
    this.http
      .get("http://localhost:3000/delete_card?cardId=" + card.uid)
      .subscribe(response => {
        this.dataServ
          .getCards();
      });
  }

}
