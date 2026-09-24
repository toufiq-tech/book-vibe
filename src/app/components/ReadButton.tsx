'use client';
import React, { useContext } from 'react';
import { IBook } from '@/app/types/books.type';
import { BooksContext } from '@/app/context/Bookscontext';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReadButton = ({ book }: { book: IBook }) => {

    const{readBooks, SetreadBooks} = useContext(BooksContext);

    const handleReadBooks = () => {
        SetreadBooks([...readBooks, book]);
        toast.success(`${book.bookName} has been added to your read books list!`, {
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
        <button className="btn btn-primary" onClick={() => handleReadBooks()}>Read</button>
    );
};

export default ReadButton;