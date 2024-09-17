import { Injectable } from '@angular/core';
import { FavoriteBook } from '../../core/models/favoritesBook.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesBookService {
  private favoriteBooks: FavoriteBook[] = [];

  constructor() {
    this.loadFavoriteBooks();
  }
  private saveFavoriteBooks(): void {
    localStorage.setItem('favoriteBooks', JSON.stringify(this.favoriteBooks));
  }

  private loadFavoriteBooks(): void {
    const favorites = localStorage.getItem('favoriteBooks');
    if (favorites) {
      this.favoriteBooks = JSON.parse(favorites);
    }
  }

  getFavoritesBooks(): FavoriteBook[] {
    this.loadFavoriteBooks();  
    return this.favoriteBooks;
  }

  addFavoriteBook(book: FavoriteBook): void {
    this.favoriteBooks.push(book);
    this.saveFavoriteBooks();
  }

  removeFavoriteBook(bookId: string): void {
    this.favoriteBooks = this.favoriteBooks.filter(book => book.id !== bookId);
    this.saveFavoriteBooks();
  }

  updateFavoriteBook(updatedBook: FavoriteBook): void {
    const index = this.favoriteBooks.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.favoriteBooks[index] = updatedBook;
      this.saveFavoriteBooks();
    }
  }

  filterBooksByTags(tags: string[]): FavoriteBook[] {
    this.loadFavoriteBooks(); 
    return this.favoriteBooks.filter(book => tags.some(tag => book.tags.includes(tag)));
  }

  isFavorite(bookId: string): boolean {
    this.loadFavoriteBooks();
    return this.favoriteBooks.some(book => book.id === bookId);
  }
}
