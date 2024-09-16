import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from '../../core/header/header.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ContentComponent],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent  {

}
