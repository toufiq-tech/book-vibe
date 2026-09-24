'use client';
import React, { useContext } from 'react';
import { IBook } from '@/app/types/books.type';
import { BooksContext } from '@/app/context/Bookscontext';

const ReadButton = ({ book }: { book: IBook }) => {

    const{readBooks, SetreadBooks} = useContext(BooksContext);

    const handleReadBooks = () => {
        SetreadBooks([...readBooks, book]);
        alert(`${book.bookName} has been added to your read books list!`);
    };
    return (
        <button className="btn btn-primary" onClick={() => handleReadBooks()}>Read</button>
    );
};

export default ReadButton;