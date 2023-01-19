import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksRoutingModule } from './books/books-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path:'**', redirectTo: '/' }
];

@NgModule({
  imports: [
    BooksRoutingModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
