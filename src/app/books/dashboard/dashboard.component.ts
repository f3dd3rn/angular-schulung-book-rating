import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import BooksService from '../../services/books';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [BooksService]
})
export class DashboardComponent {
  constructor(protected booksService: BooksService) {}

  handleRateUp(book: Book) {
    this.booksService.rateUp(book);
  }
  
  handleRateDown(book: Book) {
    this.booksService.rateDown(book);
  }
}
