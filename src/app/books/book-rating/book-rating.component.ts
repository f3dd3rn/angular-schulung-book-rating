import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.scss']
})
export class BookRatingComponent implements OnInit {
  @Input() rating: number = 0;
  filled: number[] = [];
  empty: number[] = [];
  
  ngOnInit() {
    this.filled = new Array(Number(this.rating));
    this.empty = new Array(5 - this.rating);
  }
}
