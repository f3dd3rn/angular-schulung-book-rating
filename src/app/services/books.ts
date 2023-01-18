import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import data from '../../assets/data.json';
import { MAX_RATING, MIN_RATING } from '../config';

@Injectable({
    providedIn: 'root'
})
export default class Books {
    private _books: Book[] = data.books as Book[];
    get books(): Book[] {
        return this._books;
    }

    constructor() {
        const localBooks = localStorage.getItem('books');
        if (localBooks) {
            this._books = JSON.parse(localBooks) as Book[];
        }
    }

    persist() {
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    rateDown(book: Book) {
        this.updateList({...book, rating: this.normalizeRating(book.rating - 1)});
    }
    
    rateUp(book: Book) {
        this.updateList({...book, rating: this.normalizeRating(book.rating + 1)});
    }
    
    private normalizeRating(rating: number): number {
        return Math.min(Math.max(rating, MIN_RATING), MAX_RATING);
    }
    
    private updateList(book: Book) {
        this._books = this.books.map(b => b.isbn === book.isbn ? book : b);
        this.persist();
    }
}
