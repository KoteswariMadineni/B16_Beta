import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  title:string= "Expert Angular";
  author:string="Mathie Nayrolles, Rajesh Gunasundaram";
  category:string="Education";
  price:string="3300.00";
  

  constructor() { }

  ngOnInit(): void {
  }

}
