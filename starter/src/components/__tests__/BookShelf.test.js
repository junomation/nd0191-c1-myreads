import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookShelf from '../BookShelf';

describe('BookShelf component', () => {
  const books = [
    {
      id: 'book1',
      title: 'Book 1',
      authors: ['Author 1'],
      imageLinks: {
        thumbnail: 'http://placehold.it/128x193?text=Book+1',
      },
      shelf: 'currentlyReading',
    },
    {
      id: 'book2',
      title: 'Book 2',
      authors: ['Author 2'],
      imageLinks: {
        thumbnail: 'http://placehold.it/128x193?text=Book+2',
      },
      shelf: 'wantToRead',
    },
    {
      id: 'book3',
      title: 'Book 3',
      authors: ['Author 3'],
      imageLinks: {
        thumbnail: 'http://placehold.it/128x193?text=Book+3',
      },
      shelf: 'read',
    },
  ];
  const onShelfChange = jest.fn();

  test('renders the correct title', () => {
    render(<BookShelf title="Currently Reading" books={books} onShelfChange={onShelfChange} />);
    const currentlyReadingShelf = screen.getAllByText('Currently Reading', { selector: 'h2.bookshelf-title' });
    expect(currentlyReadingShelf).toHaveLength(1);
  });

  test('renders the correct number of books', () => {
    render(<BookShelf title="Currently Reading" books={books} onShelfChange={onShelfChange} />);
    const bookList = screen.getByRole('list');
    const booksDisplayed = bookList.children.length;
    expect(booksDisplayed).toBe(3);
  });

  test('renders the correct book details', () => {
    render(<BookShelf title="Currently Reading" books={books} onShelfChange={onShelfChange} />);
    const bookTitle = screen.getByText('Book 1');
    expect(bookTitle).toBeInTheDocument();
    const bookAuthor = screen.getByText('Author 1');
    expect(bookAuthor).toBeInTheDocument();
    const bookImage = screen.getAllByText('', {selector: '.book-cover'});
    expect(bookImage[0]).toHaveStyle('background-image: url(http://placehold.it/128x193?text=Book+1)');
  });

  test('calls onShelfChange when a book is moved to a different shelf', () => {
    render(<BookShelf title="Currently Reading" books={books} onShelfChange={onShelfChange} />);
    const select = screen.getAllByText('', {selector: '.book-shelf-changer select'})[0];
    fireEvent.change(select, { target: { value: 'read' } });
    expect(onShelfChange).toHaveBeenCalledWith(books[0], 'read');
  });
});
