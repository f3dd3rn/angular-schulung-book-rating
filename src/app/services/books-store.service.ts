import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../config';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksStoreService {

  constructor(private http: HttpClient) { }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${API_ENDPOINT}/books`, book);
  }

  deleteOne(isbn: string): Observable<void> {
    return this.http.delete<void>(`${API_ENDPOINT}/books/${isbn}`);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_ENDPOINT}/books`);
  }

  getOne(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${API_ENDPOINT}/books/${isbn}`);
  }

  updateRating(isbn: string, rating: number): Observable<void> {
    return this.http.post<void>(`${API_ENDPOINT}/books/${isbn}/rate`, { rating });
  }
}
