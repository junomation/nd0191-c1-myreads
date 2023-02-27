import "./App.css";
import Bookshelf from "./components/Bookshelf";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      const updatedBooks = books.map((b) => {
        if (b.id === book.id) {
          return { ...b, shelf };
        }
        return b;
      });
      setBooks(updatedBooks);
    });
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Bookshelf
              title="Currently Reading"
              books={books.filter((book) => book.shelf === "currentlyReading")}
              updateShelf={handleShelfChange}
              shelf="currentlyReading"
            />
            <Bookshelf
              title="Want to Read"
              books={books.filter((book) => book.shelf === "wantToRead")}
              updateShelf={handleShelfChange}
              shelf="wantToRead"
            />
            <Bookshelf
              title="Read"
              books={books.filter((book) => book.shelf === "read")}
              updateShelf={handleShelfChange}
              shelf="read"
            />
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
