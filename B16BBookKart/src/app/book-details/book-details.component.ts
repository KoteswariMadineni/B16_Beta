import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from './book-details.service';
//import { IBookDetails } from './services/book-details';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
    public bookDetails:any;
   //public errMsg: any;

  constructor(private detailsService: BookDetailsService) { }

  ngOnInit(): void {
    
  /*this.detailsService.getBookDetails().subscribe
     (
       data=>this.bookDetails=data
      //error=> this.errMsg= error
 ) ;*/
 
    
  this.detailsService.getBookDetailsByParameter().subscribe(data=>{this.bookDetails=data;});
  }

}
