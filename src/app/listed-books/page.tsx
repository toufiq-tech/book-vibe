'use client';
import React, { useContext } from 'react';
import { BooksContext } from '../context/Bookscontext';
import ReadBookCard from '../components/ReadBookCard';

const ListedBooks = () => {
    const {readBooks, wishlistBooks } =useContext(BooksContext);
     console.log("Read Books:", readBooks);
     console.log("Wishlist Books:", wishlistBooks);   
    return (
        <div  className="container mx-auto p-4">
            <h1 className="text-4xl font-bold bg-mist-200 rounded-3xl text-center py-10">Books</h1>
        <div>
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books - ${readBooks.length}`} />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {readBooks.length >0 ?readBooks.map((book) => (
        <ReadBookCard book={book} key={book.bookId} />
    )) : <p>No read books available.</p>}
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books - ${wishlistBooks.length}`} defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {wishlistBooks.length >0 ?wishlistBooks.map((book) => (
      <ReadBookCard book={book} key={book.bookId} />
    )) : <p>No wishlist books available.</p>}
  </div>

</div>
        </div>
        </div>
    );
};

export default ListedBooks;