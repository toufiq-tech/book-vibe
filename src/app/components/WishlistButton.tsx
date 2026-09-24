'use client';
import React, { useContext } from 'react';
import { IBook } from '@/app/types/books.type';
import { BooksContext } from '@/app/context/Bookscontext';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WishlistButton = ({ book }: { book: IBook }) => {

    const{wishlistBooks, SetwishlistBooks} = useContext(BooksContext);

    const handleWishlistBooks = () => {
        SetwishlistBooks([...wishlistBooks, book]);
        toast.success(`${book.bookName} has been added to your wishlist!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    return (
        <button className="btn btn-primary" onClick={() => handleWishlistBooks()}>Add to Wishlist</button>
    );
};

export default WishlistButton;