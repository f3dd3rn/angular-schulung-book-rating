import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookRatingComponent } from './book/book-rating/book-rating.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { SearchComponent } from './search/search.component';
import { NewBookComponent } from './new-book/new-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValdemortModule } from 'ngx-valdemort';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookRatingComponent,
    BookDetailComponent,
    SearchComponent,
    NewBookComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    ValdemortModule
  ],
  exports: [
    DashboardComponent,
    BookComponent,
  ],
  providers: []
})
export class BooksModule { }
