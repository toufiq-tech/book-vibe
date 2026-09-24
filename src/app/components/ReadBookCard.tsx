import React from 'react';
import { IBook } from '../types/books.type';
import Image from 'next/image';

const ReadBookCard = ({ book } : { book : IBook }) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <figure>
        <Image
          src={book.image}
          alt={book.bookName}
          height={400}
          width={400}
          className="h-48 w-full object-cover rounded-t-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{book.bookName}</h2>
        <p className="text-sm text-gray-600">✍️ {book.author}</p>
        <p className="text-sm text-gray-500">📚 {book.category}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {book.tags.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline badge-success text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-yellow-500 font-semibold">
            ⭐ {book.rating}
          </span>
          <button className="btn btn-sm btn-primary">View Details</button>
        </div>
      </div>
    </div>
    );
};

export default ReadBookCard;