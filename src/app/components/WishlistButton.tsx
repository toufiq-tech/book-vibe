'use client';
import React, { useContext } from 'react';
import { IBook } from '@/app/types/books.type';
import { BooksContext } from '@/app/context/Bookscontext';

const WishlistButton = ({ book }: { book: IBook }) => {

    const{wishlistBooks, SetwishlistBooks} = useContext(BooksContext);

    const handleWishlistBooks = () => {
        SetwishlistBooks([...wishlistBooks, book]);
        alert(`${book.bookName} has been added to your wishlist!`);
    };
    return (
        <button className="btn btn-primary" onClick={() => handleWishlistBooks()}>Add to Wishlist</button>
    );
};

export default WishlistButton;