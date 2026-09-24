'use client';
import React, { useContext } from 'react';
import { BooksContext } from '../context/Bookscontext';

const ListedBooks = () => {
    const {readBooks, wishlistBooks } =useContext(BooksContext);
     console.log("Read Books:", readBooks);
     console.log("Wishlist Books:", wishlistBooks);   
    return (
        <div>
            list of books
        </div>
    );
};

export default ListedBooks;