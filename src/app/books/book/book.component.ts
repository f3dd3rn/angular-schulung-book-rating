import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { MAX_RATING, MIN_RATING } from 'src/app/config';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book?: Book;
  @Output() onRateDown: EventEmitter<void> = new EventEmitter();
  @Output() onRateUp: EventEmitter<void> = new EventEmitter();

  MIN_RATING: number = MIN_RATING;
  MAX_RATING: number = MAX_RATING;

  doRateDown() {
    this.onRateDown.emit();
  }
  
  doRateUp() {
    this.onRateUp.emit();
  }
}
