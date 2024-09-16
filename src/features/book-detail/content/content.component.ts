import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../app/services/book.service';
import { Book } from '../../../core/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  constructor(private bookService: BookService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe(book => {
        this.book = book;
        // console.log(book);
      });
    }
  }

}
