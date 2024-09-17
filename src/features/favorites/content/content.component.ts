import { Component, OnInit } from '@angular/core';
import { FavoriteBook } from '../../../core/models/favoritesBook.model';
import { FavoritesBookService } from '../../../app/services/favorites-book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { get } from 'http';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  favoriteBooks: FavoriteBook[] = [];
  selectedTag: string = '';
  selectedTags: string[] = [];
  newTags: { [bookId: string]: string } = {};
  isAddingTag: { [bookId: string]: boolean } = {};
  isEditingNotes: { [bookId: string]: boolean } = {};

  constructor(private favoritesBookService: FavoritesBookService) {}

  ngOnInit(): void {
    this.loadFavoriteBooks();
  }

  hasFavoritesBooks(): boolean {
     return  this.favoritesBookService.getFavoritesBooks().length > 0;
  }

  loadFavoriteBooks(): void {
    this.favoriteBooks = this.favoritesBookService.getFavoritesBooks();
    this.favoriteBooks.forEach(book => {
      this.isAddingTag[book.id] = false;
      this.isEditingNotes[book.id] = false;
    });
  }

  removeBook(bookId: string): void {
    this.favoritesBookService.removeFavoriteBook(bookId);
    this.favoriteBooks = this.favoritesBookService.getFavoritesBooks();
    this.favoriteBooks.forEach(book => {
      this.isAddingTag[book.id] = false;
      this.isEditingNotes[book.id] = false;
    });
  }

  updateBook(book: FavoriteBook): void {
    this.favoritesBookService.updateFavoriteBook(book);
    this.isEditingNotes[book.id] = false;
  }

  // filterBooks(): void {
  //   if (this.selectedTag) {
  //     this.favoriteBooks = this.favoritesBookService.filterBooksByTag(this.selectedTag);
  //   } else {
  //     this.favoriteBooks = this.favoritesBookService.getFavoritesBooks();
  //   }
  //   this.favoriteBooks.forEach(book => {
  //     this.isAddingTag[book.id] = false;
  //     this.isEditingNotes[book.id] = false;
  //   });
  // }

  filterBooks(): void {
    if (this.selectedTags.length > 0) {
      this.favoriteBooks = this.favoritesBookService.filterBooksByTags(this.selectedTags);
    } else {
      this.favoriteBooks = this.favoritesBookService.getFavoritesBooks();
    }
    this.favoriteBooks.forEach(book => {
      this.isAddingTag[book.id] = false;
      this.isEditingNotes[book.id] = false;
    });
  }


  saveTag(book: FavoriteBook): void {
    const newTag = this.newTags[book.id]?.trim();
    if (newTag) {
      book.tags = book.tags ? [...book.tags, newTag] : [newTag];
      this.newTags[book.id] = '';
      this.updateBook(book);
      this.isAddingTag[book.id] = false;
    }
  }

  setAddTag(bookId: string, condition: boolean): void {
    this.isAddingTag[bookId] = condition;
  }

  removeTag(book: FavoriteBook, tagIndex: number): void {
    book.tags.splice(tagIndex, 1);
    this.updateBook(book);
  }

  rateBook(book: FavoriteBook, rating: number): void {
    book.rating = rating;
    this.updateBook(book);
  }

  toggleEditNotes(bookId: string): void {
    this.isEditingNotes[bookId] = !this.isEditingNotes[bookId];
  }
  addTagToFilter(tag: string): void {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
      this.filterBooks();
    }
  }
  removeTagFromFilter(tag: string): void {
    this.selectedTags = this.selectedTags.filter(t => t !== tag);
    this.filterBooks();
  }
}
