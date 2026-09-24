import React from "react";
import BookCard from "../components/BookCard";
import { IBook } from "../types/books.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BooksSection = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 font-semibold uppercase tracking-wider text-purple-600">
          Explore Our Collection
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          Books
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Explore our collection of amazing books and find your next
          favorite story.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book : IBook,ind : number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default BooksSection;