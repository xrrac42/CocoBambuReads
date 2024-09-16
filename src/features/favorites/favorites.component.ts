import { Component } from '@angular/core';
import { HeaderComponent} from '../../core/header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from "../../core/footer/footer.component";


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

}
