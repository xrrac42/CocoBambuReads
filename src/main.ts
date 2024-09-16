import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { HomeComponent } from './features/home/home.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BookDetailComponent } from './features/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: '**', redirectTo: '' }
];

const bootstrap = () => {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideHttpClient(withInterceptorsFromDi())
    ]
  }).catch(err => console.error(err));
};

declare const module: {
  hot?: {
    accept: () => void;
    dispose: (callback: () => void) => void;
  };
};

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    window.location.reload();
  });
} else {
  bootstrap();
}
