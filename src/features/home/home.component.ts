import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books = [
    {
      title: 'Livro 1',
      author: 'Autor 1',
      cover: 'https://via.placeholder.com/150'
    },
    {
      title: 'Livro 2',
      author: 'Autor 2',
      cover: 'https://via.placeholder.com/150'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
