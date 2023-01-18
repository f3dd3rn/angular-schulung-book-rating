import { Component, Input } from '@angular/core';
import { Book } from 'src/models/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book: Book | null = null;
}
