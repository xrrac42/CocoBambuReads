import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../core/models/book.model';
import { BooksApiResponse } from '../../core/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<BooksApiResponse> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get<BooksApiResponse>(url);
  }
  getBookById(id: string): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }
}
