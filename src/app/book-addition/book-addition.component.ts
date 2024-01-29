import { Component,OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-addition',
  templateUrl: './book-addition.component.html',
  styleUrls: ['./book-addition.component.css']
})
export class BookAdditionComponent implements OnInit{
   book:Book=new Book();
   newId:number=0;
   submitted:boolean=false;
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.bookService.generateId().subscribe(data => {
      this.newId = data;
     });
 }

 insertBook():void{
  this.book.bookId=this.newId;
  this.bookService.insertBook(this.book).subscribe(data => {
      this.book = new Book();
      this.submitted=true;
  });
 }

   returnBack():void{
    this.router.navigate(['']);
  
   }

}