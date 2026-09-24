'use client';
import React from 'react';
import { IBook } from '@/app/types/books.type';
import { BooksContext } from '@/app/context/Bookscontext';

const ReadButton = ({ book }: { book: IBook }) => {

    const{readBooks, SetreadBooks} = React.useContext(BooksContext);

    const handleReadBooks = () => {
        SetreadBooks([...readBooks, book]);
    };
    return (
        <button className="btn btn-primary" onClick={() => handleReadBooks()}>Read</button>
    );
};

export default ReadButton;