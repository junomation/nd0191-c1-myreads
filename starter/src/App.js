import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage books={books} onShelfChange={handleShelfChange} />} />
          <Route exact path="/search" element={<SearchPage books={books} onShelfChange={handleShelfChange} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  
}

export default App;
