export interface Book {
    description: string;
    image: string;
    isbn: string;
    price: number;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    title: string;
}
