'use client'
import React, { useState } from 'react';

export const BooksContext = React.createContext({});

const BooksProvider = ({children} : {children: React.ReactNode}) => {

const [readBooks, SetreadBooks] = useState([]);
const [wishlistBooks, SetwishlistBooks] = useState([]);

const SharedData={
    readBooks,
    SetreadBooks,
    wishlistBooks,
    SetwishlistBooks
}

    return <BooksContext.Provider value={{SharedData}}>{children}</BooksContext.Provider> 
        
};



export default BooksProvider;