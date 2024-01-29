import { Component,OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-report',
  templateUrl: './book-report.component.html',
  styleUrls: ['./book-report.component.css']
})
export class BookReportComponent implements OnInit {
    bookId!:number;
    book!:Book;
  constructor(private route: ActivatedRoute, private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.book=new Book();
    this.bookId=this.route.snapshot.params['bookId'];
    this.bookService.getBookById(this.bookId).subscribe(data => {
      this.book = data;
    });
  }


  returnBack():void{
    this.router.navigate(['BOOK-LIST']);
  
   }

}