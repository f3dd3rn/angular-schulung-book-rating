interface Thumbnail {
    title: string;
    url: string;
}

export interface Book {
    authors: string[];
    description: string;
    image: string;
    isbn: string;
    price: number;
    published: string;
    rating: number;
    subtitle: string;
    thumbnails: Thumbnail[]
    title: string;
}
