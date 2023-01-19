import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookRatingService } from 'src/app/services/book-rating.service';
import { BooksStoreService } from 'src/app/services/books-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books$: Observable<Book[]> = this.booksStoreService.getAll();
  constructor(protected booksStoreService: BooksStoreService, protected bookRatingService: BookRatingService) {}

  handleRateUp(book: Book) {
    const b: Book = this.bookRatingService.rateUp(book);
  }
  
  handleRateDown(book: Book) {
    const b: Book = this.bookRatingService.rateDown(book);
  }
}
