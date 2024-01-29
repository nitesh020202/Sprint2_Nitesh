// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8086/book';
  private idUrl = 'http://localhost:8086/id-gen';


  constructor(private http: HttpClient) {}

    getBookList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
  
    insertBook(book: Object): Observable<Object> {
      
      return this.http.post(`${this.baseUrl}`, book);
    }
    
    getBookById(bookId : number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${bookId}`);
    }
    updateBook(book:object):Observable<Object>{
      return this.http.put(`${this.baseUrl}`, book);
    }
    deleteBook(bookId : number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${bookId}`);
    }
    generateId(): Observable<any> {
      return this.http.get(`${this.idUrl}`);
    }
  

}