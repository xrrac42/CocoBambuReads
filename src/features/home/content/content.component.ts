import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../../../app/services/book.service';
import { Book } from '../../../core/models/book.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FavoritesBookService } from '../../../app/services/favorites-book.service';
import { FavoriteBook } from '../../../core/models/favoritesBook.model';
import { FooterComponent } from '../../../core/footer/footer.component';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit { 
  constructor(private bookService: BookService, private favoritesBookService: FavoritesBookService, @Inject(ActivatedRoute) private route: ActivatedRoute ) {
    this.route.paramMap.subscribe((params:any)=> {
      this.id = params.get('id');});
   }

   ngOnInit(): void {
  }
  id: string | null = '';
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
 
  addBook(book: Book): void {
    if (book) {
      const favoriteBook: FavoriteBook = {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : '',
        description: book.volumeInfo.description || '',
        genre: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : '',
        publicationYear: book.volumeInfo.publishedDate ? new Date(book.volumeInfo.publishedDate).getFullYear() : 0,
        rating: 0, 
        notes: '',
        tags: [], 
        imageLinks: book.volumeInfo.imageLinks ? { thumbnail: book.volumeInfo.imageLinks.thumbnail } : { thumbnail: '' }
      };
      // console.log('Add Livro:', favoriteBook);      
      this.favoritesBookService.addFavoriteBook(favoriteBook);

    }
  }

  removeBook(bookId: string): void {
    this.favoritesBookService.removeFavoriteBook(bookId);
  }

  isFavorite(bookId: string): boolean {
    return this.favoritesBookService.isFavorite(bookId);
  }


}
