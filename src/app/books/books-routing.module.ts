import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewBookComponent } from './new-book/new-book.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component: NewBookComponent },
  { path: 'search', component: SearchComponent },
  { path: ':isbn', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
