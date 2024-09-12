import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoritesComponent } from '../features/favorites/favorites.component';
import { HeaderComponent } from '../core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FavoritesComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coco-bambu-reads';
}
