export interface FavoriteBook {
    id: string;
    title: string;
    author: string;
    description: string;
    genre: string;
    publicationYear: number;
    rating: number;
    notes: string;
    tags: string[];
    imageLinks?: {
        thumbnail: string;
      };
  }

  