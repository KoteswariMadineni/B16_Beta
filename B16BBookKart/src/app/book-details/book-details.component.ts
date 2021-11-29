import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from './book-details.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
    public bookDetails:any;
   

  constructor(private detailsService: BookDetailsService) { }

  ngOnInit(): void {
    
  this.detailsService.getBookDetailsByParameter().subscribe(data=>{this.bookDetails=data;});
  }

}
