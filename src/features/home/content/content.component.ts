import { Component } from '@angular/core';
import { BookService } from '../../../app/services/book.service';
import { Book } from '../../../core/models/book.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  constructor(private bookService: BookService) { }
  books: Book[] = [];
  query: string = '';

  flagReload: boolean = false;
  getFlagReload(){
    return this.flagReload;
  }
  
  setFlagReload(paramater:boolean): void {
    this.flagReload = paramater;
  }	

  flagMyFavorites: boolean = false;

  setFlagMyFavorites(paramater:boolean): void {
    this.flagMyFavorites = paramater;
  }

  getFlagMyFavorites(){
    return this.flagMyFavorites;
  }


  searchBooks(): void {
    this.setFlagReload(true);
    this.setFlagMyFavorites(true);
    this.bookService.searchBooks(this.query)
      .pipe(finalize(() => this.setFlagReload(false)))
      .subscribe(response => {
        this.books = response.items;
      });
  }

}
