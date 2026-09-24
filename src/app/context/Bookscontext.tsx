"use client"
import React, { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';
import { IBook } from '@/app/types/books.type';

interface BooksContextValue {
    readBooks: IBook[];
    SetreadBooks: Dispatch<SetStateAction<IBook[]>>;
    wishlistBooks: IBook[];
    SetwishlistBooks: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextValue>({
    readBooks: [],
    SetreadBooks: () => undefined,
    wishlistBooks: [],
    SetwishlistBooks: () => undefined,
});

const BooksProvider = ({children} : {children:ReactNode}) => {

const [readBooks, SetreadBooks] = useState<IBook[]>([]);
const [wishlistBooks, SetwishlistBooks] = useState<IBook[]>([]);

const SharedData={
    readBooks,
    SetreadBooks,
    wishlistBooks,
    SetwishlistBooks
}

    return <BooksContext.Provider value={SharedData}>
        {children}
    </BooksContext.Provider> 
        
};



export default BooksProvider;