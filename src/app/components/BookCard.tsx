import React from 'react';
import { IBook } from '../types/books.type';
import Link from 'next/link';
import Image from 'next/image';

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({ book } : IBookCardProps) => {
    return (
        <div
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-80 overflow-hidden bg-gray-100">
              <Image
                src={book.image}
                alt={book.bookName}
                height={400}
                width={400}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category */}
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-purple-700 shadow">
                {book.category}
              </span>

              {/* Rating */}
              <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white">
                ⭐ {book.rating}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              {/* Book Name */}
              <h2 className="mb-1 line-clamp-1 text-2xl font-bold text-gray-900">
                {book.bookName}
              </h2>

              {/* Author */}
              <p className="mb-4 text-sm text-gray-500">
                Written by{" "}
                <span className="font-semibold text-gray-700">
                  {book.author}
                </span>
              </p>

              {/* Review */}
              <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {book.review}
              </p>

              {/* Book Information */}
              <div className="mb-5 grid grid-cols-3 gap-2 border-y border-gray-100 py-4">
                <div>
                  <p className="text-xs text-gray-400">Pages</p>
                  <p className="font-semibold text-gray-800">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Published</p>
                  <p className="font-semibold text-gray-800">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Publisher</p>
                  <p className="truncate font-semibold text-gray-800">
                    {book.publisher}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Link href={`/books/${book.bookId}`}><button className="w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-700">
                View Details
              </button></Link>
            </div>
          </div>
    );
};

export default BookCard;