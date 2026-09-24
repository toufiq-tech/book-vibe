import React from 'react';
import { IBook } from '../../types/books.type';
import ReadButton from '@/app/components/ReadButton';

interface IBookDetailsProps {
    params: {
        bookid: string;
    };
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetails = async ({params} : IBookDetailsProps) => {
    const { bookid } = await params;
    const booksData = await getBooks();
    const book = booksData.find((book : IBook) => String(book.bookId) === String(bookid)) as IBook;

    return (
        <div className="container mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="book.image"
      alt="book.bookName" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{book.bookName}</h2>
    <p>{book.review}</p>
    <div className="card-actions justify-end">
      <ReadButton book = {book}/>
      <button className="btn btn-primary">Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;