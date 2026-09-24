export interface IBook {
    bookId: number;
    bookName: string;
    author: string;
    category: string;
    rating: number;
    image: string;
    review: string;
    totalPages: number;
    yearOfPublishing: number;
    publisher: string;
    tags: string[];
}