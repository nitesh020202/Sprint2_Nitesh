import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{
  books!:Observable<Book[]>; 
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.showAllBooks();
  }
  
  showAllBooks():void{
    this.books=this.bookService.getBookList()

  }
 returnBack():void{
  this.router.navigate(['']);

 }

 bookUpdate(bookId:number):void{
  this.router.navigate(['BOOK-MOD',bookId]);
 }
 bookShow(bookId:number):void{
  this.router.navigate(['BOOK-SHOW',bookId]);
 }
 bookDelete(bookId:number):void{
  this.bookService.deleteBook(bookId).subscribe(
    data => {         
      this.showAllBooks();
    });
 }
 
 
}
