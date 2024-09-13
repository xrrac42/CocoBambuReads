import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../app/services/book.service';
import { HeaderComponent } from '../../core/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: any[] = [];
  query: string = '';

  constructor(private bookService: BookService) { }

  searchBooks(): void {
    if (this.query) {
      this.bookService.searchBooks(this.query).subscribe((response: any) => {
        this.books = response.items || [];
      });
    }
  }
}
