import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, mergeMap, Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksStoreService } from 'src/app/services/books-store.service';

@Component({
  selector: 'br-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  book$: Observable<Book> = this.route.paramMap.pipe(
    mergeMap((params: ParamMap) => this.booksStoreService.getOne(params.get('isbn') || ''))
  );
  constructor(
    private booksStoreService: BooksStoreService,
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  onDelete(book: Book) {
    if (confirm(`Do you want to delete ${book.title}?`)) {
      this.booksStoreService.deleteOne(book.isbn).subscribe(() => this.router.navigateByUrl('/books'));
    }
  }
}
