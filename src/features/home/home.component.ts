import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../app/services/book.service';
import { HeaderComponent } from '../../core/header/header.component';
import { Book } from '../../core/models/book.model';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
