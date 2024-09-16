import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../app/services/book.service';
import { Book } from '../../../core/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoriteBook } from '../../../core/models/favoritesBook.model';
import { FavoritesBookService } from '../../../app/services/favorites-book.service';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  book: Book | undefined;
  bookId: string | null = null;
  favoriteBooks: FavoriteBook[] = []; 
  

  constructor(private bookService: BookService, private FavoritesBookService: FavoritesBookService ,  private route: ActivatedRoute) { }
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe(book => {
        this.book = book;
        // console.log(book);
      });
    }
  }

  removeBook(bookId: string): void {
    this.FavoritesBookService.removeFavoriteBook(bookId);
    this.favoriteBooks = this.FavoritesBookService.getFavoritesBooks();
  }

  addBook(book: Book): void {
    if (book) {
      const favoriteBook: FavoriteBook = {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : '',
        description: book.volumeInfo.description || '',
        genre: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : '',
        publicationYear: book.volumeInfo.publishedDate ? new Date(book.volumeInfo.publishedDate).getFullYear() : 0,
        rating: 1, 
        notes: '',
        tags: [], 
        imageLinks: book.volumeInfo.imageLinks ? { thumbnail: book.volumeInfo.imageLinks.thumbnail } : { thumbnail: '' }
      };
      console.log('Add Livro:', favoriteBook);      
      this.FavoritesBookService.addFavoriteBook(favoriteBook);

    }
  }

  isFavorite(bookId: string): boolean {
    return this.FavoritesBookService.isFavorite(bookId);
  }
}




