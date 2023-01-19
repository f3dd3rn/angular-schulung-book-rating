import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book?: Book;
  @Input() canRateDown: boolean = false;
  @Input() canRateUp: boolean = false;
  @Output() onRateDown: EventEmitter<void> = new EventEmitter();
  @Output() onRateUp: EventEmitter<void> = new EventEmitter();

  doRateDown() {
    this.onRateDown.emit();
  }
  
  doRateUp() {
    this.onRateUp.emit();
  }
}
