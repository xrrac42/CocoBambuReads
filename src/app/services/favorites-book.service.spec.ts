import { TestBed } from '@angular/core/testing';
import { FavoritesBookService } from './favorites-book.service';
import { FavoriteBook } from '../../core/models/favoritesBook.model';

describe('FavoritesBookService', () => {
  let service: FavoritesBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesBookService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar um livro aos favoritos', () => {
    const book: FavoriteBook = {
      id: '1',
      title: 'Livro de Teste',
      author: 'Autor de Teste',
      description: 'Descrição de Teste',
      genre: 'Gênero de Teste',
      publicationYear: 2023,
      tags: [],
      notes: 'Notas de Teste',
      rating: 4
    };
    service.addFavoriteBook(book);
    expect(service.getFavoritesBooks()).toContain(book);
  });

  it('deve remover um livro dos favoritos', () => {
    const book: FavoriteBook = {
      id: '1',
      title: 'Livro de Teste',
      author: 'Autor de Teste',
      description: 'Descrição de Teste',
      genre: 'Gênero de Teste',
      publicationYear: 2023,
      tags: [],
      notes: 'Notas de Teste',
      rating: 4
    };
    service.addFavoriteBook(book);
    service.removeFavoriteBook(book.id);
    expect(service.getFavoritesBooks()).not.toContain(book);
  });

  it('deve atualizar um livro favorito', () => {
    const book: FavoriteBook = {
      id: '1',
      rating: 2,
      notes: 'Notas de Teste',
      title: 'Livro de Teste',
      author: 'Autor de Teste',
      description: 'Descrição de Teste',
      genre: 'Gênero de Teste',
      publicationYear: 2023,
      tags: []
    };
    service.addFavoriteBook(book);
    const updatedBook: FavoriteBook = {
      id: '1',
      title: 'Livro de Teste Atualizado',
      author: 'Autor de Teste',
      description: 'Descrição de Teste Atualizada',
      genre: 'Gênero de Teste',
      publicationYear: 2023,
      tags: [],
      notes: 'Notas de Teste',
      rating: 4
    };
    service.updateFavoriteBook(updatedBook);
    expect(service.getFavoritesBooks().find(b => b.id === book.id)?.title).toBe('Livro de Teste Atualizado');
  });

  it('deve filtrar livros por tags', () => {
    const book1: FavoriteBook = {
      id: '1',
      title: 'Livro de Teste 1',
      author: 'Autor de Teste 1',
      description: 'Descrição de Teste 1',
      genre: 'Gênero de Teste 1',
      publicationYear: 2023,
      tags: ['tag1'],
      rating: 5,
      notes: 'Notas de Teste 1'
    };
    const book2: FavoriteBook = {
      rating: 5,
      notes: 'Notas de Teste 2',
      id: '2',
      title: 'Livro de Teste 2',
      author: 'Autor de Teste 2',
      description: 'Descrição de Teste 2',
      genre: 'Gênero de Teste 2',
      publicationYear: 2023,
      tags: ['tag2']
    };
    service.addFavoriteBook(book1);
    service.addFavoriteBook(book2);
    expect(service.filterBooksByTags(['tag1'])).toContain(book1);
    expect(service.filterBooksByTags(['tag1'])).not.toContain(book2);
  });

  it('deve verificar se um livro é favorito', () => {
    const book: FavoriteBook = {
      id: '1',
      title: 'Livro de Teste',
      notes: 'Notas de Teste',
      rating: 5,
      author: 'Autor de Teste',
      description: 'Descrição de Teste',
      genre: 'Gênero de Teste',
      publicationYear: 2023,
      tags: []
    };
    service.addFavoriteBook(book);
    expect(service.isFavorite(book.id)).toBeTrue();
    service.removeFavoriteBook(book.id);
    expect(service.isFavorite(book.id)).toBeFalse();
  });
});
