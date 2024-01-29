import { Component,OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  book:Book=new Book();
  bookId:number=0;
   submitted:boolean = false;
   newPrice:number=0.0;
  constructor(private route: ActivatedRoute, private bookService: BookService,private router: Router) { }
  ngOnInit(): void {
    this.book = new Book();
    this.bookId = this.route.snapshot.params['bookId'];
    this.bookService.getBookById(this.bookId).subscribe(data => {
        this.book = data;
      });

  }

  updateBook() {
    this.book.price=this.newPrice;
    this.bookService.updateBook(this.book).subscribe(data => {
        this.book = new Book();
        this.submitted = true;
       });
  }




  returnBack():void{
    this.router.navigate(['BOOK-LIST']);
  
   }

}
