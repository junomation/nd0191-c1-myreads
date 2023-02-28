import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchPage from "../SearchPage";
import { search } from "../../BooksAPI";
import { BrowserRouter } from 'react-router-dom';

jest.mock("../../BooksAPI");

describe("SearchPage component", () => {
  const books = [
    {
      id: "book1",
      title: "Book 1",
      authors: ["Author 1"],
      imageLinks: {
        thumbnail: "http://placehold.it/128x193?text=Book+1",
      },
      shelf: "currentlyReading",
    },
    {
      id: "book2",
      title: "Book 2",
      authors: ["Author 2"],
      imageLinks: {
        thumbnail: "http://placehold.it/128x193?text=Book+2",
      },
      shelf: "wantToRead",
    },
    {
      id: "book3",
      title: "Book 3",
      authors: ["Author 3"],
      imageLinks: {
        thumbnail: "http://placehold.it/128x193?text=Book+3",
      },
      shelf: "read",
    },
  ];
  const onShelfChange = jest.fn();

  test("renders search results", async () => {
    search.mockResolvedValueOnce([
      {
        id: "book4",
        title: "Book 4",
        authors: ["Author 4"],
        imageLinks: {
          thumbnail: "http://placehold.it/128x193?text=Book+4",
        },
      },
    ]);

    render(
        <BrowserRouter>
            <SearchPage books={books} onShelfChange={onShelfChange} />
        </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search by title or author"
    );
    fireEvent.change(searchInput, { target: { value: "test query" } });

    // Wait for search results to load
    const searchResults = await screen.findByRole("list");
    expect(searchResults).toBeInTheDocument();

    // Assert that search results contain the expected book
    const bookTitle = screen.getByText("Book 4");
    expect(bookTitle).toBeInTheDocument();

    // Assert that onShelfChange is called when the book is added to a shelf
    const shelfSelector = bookTitle.parentElement.querySelector("select");
    fireEvent.change(shelfSelector, { target: { value: "currentlyReading" } });
    expect(onShelfChange).toHaveBeenCalledWith(
      {
        id: "book4",
        title: "Book 4",
        authors: ["Author 4"],
        imageLinks: {
          thumbnail: "http://placehold.it/128x193?text=Book+4",
        },
        shelf: "none",
      },
      "currentlyReading"
    );
  });

  test("displays no results message when search returns empty array", async () => {
    search.mockResolvedValueOnce([]);

    render(
        <BrowserRouter>
            <SearchPage books={books} onShelfChange={onShelfChange} />
        </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search by title or author"
    );
    fireEvent.change(searchInput, { target: { value: "test query" } });

    // Wait for no results message to load
    const noResultsMessage = await screen.findByText("No results found");
    expect(noResultsMessage).toBeInTheDocument();
  });
});
