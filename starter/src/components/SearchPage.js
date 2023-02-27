import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

const SearchPage = ({ books, onShelfChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery !== "") {
      search(searchQuery).then((results) => {
        if (Array.isArray(results)) {
          setSearchResults(
            results.map((book) => {
              const existingBook = books.find((b) => b.id === book.id);
              return {
                ...book,
                shelf: existingBook ? existingBook.shelf : "none",
              };
            })
          );
        } else {
          setSearchResults([]);
        }
      });
    } else {
      setSearchResults([]);
    }
  }, [books, searchQuery]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShelfChange = (book, shelf) => {
    onShelfChange(book, shelf);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        {searchResults.length > 0 ? (
          <ol className="books-grid">
            {searchResults.map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfChange={handleShelfChange} />
              </li>
            ))}
          </ol>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
