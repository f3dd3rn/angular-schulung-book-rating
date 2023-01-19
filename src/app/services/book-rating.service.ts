import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { MAX_RATING, MIN_RATING } from '../config';

@Injectable({
    providedIn: 'root'
})
export class BookRatingService {
    rateDown(book: Book): Book {
        return {
            ...book, 
            rating: this.normalizeRating(book.rating - 1)
        };
    }
    
    rateUp(book: Book): Book {
        return {
            ...book, 
            rating: this.normalizeRating(book.rating + 1)
        };
    }
    
    private normalizeRating(rating: number): number {
        return Math.min(Math.max(rating, MIN_RATING), MAX_RATING);
    }

    canRateDown(book: Book): boolean {
        return book.rating > MIN_RATING;
    }

    canRateUp(book: Book): boolean {
        return book.rating < MAX_RATING;
    }
}
