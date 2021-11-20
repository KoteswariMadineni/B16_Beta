import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookDetails:any=[{
  title: "",
  author:"",
  category:"",
  price:"",
  },
  {
    title: "",
  author:"",
  category:"",
  price:"",
  },
  {
  title: "",
  author:"",
  category:"",
  price:"",
  },
  {
    title:"",
  author:"",
  category:"",
  price:"",
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
