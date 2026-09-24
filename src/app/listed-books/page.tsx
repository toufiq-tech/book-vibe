import React, { useContext } from 'react';
import { BooksContext } from '../context/Bookscontext';

const ListedBooks = () => {
    const {readBooks } =useContext(BooksContext);
        
    return (
        <div>
            list of books
        </div>
    );
};

export default ListedBooks;