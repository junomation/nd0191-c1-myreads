import React from "react";
import Book from "./Book";

function Bookshelf(props) {
  const { title, books, updateShelf, shelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} updateShelf={updateShelf} shelf={shelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
