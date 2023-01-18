import { Component } from '@angular/core';
import BooksService from '../../../services/books';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(protected booksService: BooksService) {}
}
