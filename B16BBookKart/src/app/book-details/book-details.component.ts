import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookDetails:any=[{
  title: "Expert Angular",
  author:"Mathie Nayrolles, Rajesh Gunasundaram",
  category:"Education",
  price:"3300.00",
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
