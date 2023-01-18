import { Book } from 'src/models/book';
import data from '../assets/data.json';


export default class Books {
    books: Book[] = data.books as Book[];
    
    constructor() {
        const localBooks = localStorage.getItem('books');
        if (localBooks) {
            this.books = JSON.parse(localBooks) as Book[];
        }
    }

    pesist() {
        localStorage.setItem('books', JSON.stringify(this.books));
    }
}