import React from "react";
import Bookshelf from "./Bookshelf";
import { Link } from 'react-router-dom';

function HomePage({ books, onShelfChange }) {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf
          title="Currently Reading"
          books={currentlyReading}
          onShelfChange={onShelfChange}
        />
        <Bookshelf
          title="Want to Read"
          books={wantToRead}
          onShelfChange={onShelfChange}
        />
        <Bookshelf title="Read" books={read} onShelfChange={onShelfChange} />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default HomePage;
