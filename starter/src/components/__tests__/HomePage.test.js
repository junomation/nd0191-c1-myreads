import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../HomePage';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage component', () => {
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

  test('renders the correct bookshelves', () => {
    render(
      <BrowserRouter>
        <HomePage books={books} onShelfChange={onShelfChange} />
      </BrowserRouter>
    );
    const currentlyReadingShelf = screen.getAllByText('Currently Reading', { selector: 'h2.bookshelf-title' });
    const wantToReadShelf = screen.getAllByText('Want to Read', { selector: 'h2.bookshelf-title' });
    const readShelf = screen.getAllByText('Read', { selector: 'h2.bookshelf-title' });
    expect(currentlyReadingShelf).toHaveLength(1);
    expect(wantToReadShelf).toHaveLength(1);
    expect(readShelf).toHaveLength(1);
  });

  test('renders the correct books in each shelf', () => {
    render(
      <BrowserRouter>
        <HomePage books={books} onShelfChange={onShelfChange} />
      </BrowserRouter>
      );
    const currentlyReadingShelf = screen.getByText('Book 1');
    const wantToReadShelf = screen.getByText('Book 2');
    const readShelf = screen.getByText('Book 3');

    // Assert that each shelf contains the expected books
    expect(currentlyReadingShelf.parentElement.querySelectorAll('.book-title')).toHaveLength(1);
    expect(wantToReadShelf.parentElement.querySelectorAll('.book-title')).toHaveLength(1);
    expect(readShelf.parentElement.querySelectorAll('.book-title')).toHaveLength(1);    
    expect(currentlyReadingShelf.parentElement.querySelector('.book-title')).toHaveTextContent('Book 1');
    expect(wantToReadShelf.parentElement.querySelector('.book-title')).toHaveTextContent('Book 2');
    expect(readShelf.parentElement.querySelector('.book-title')).toHaveTextContent('Book 3');
  });

  test('calls onShelfChange when a book is moved to a different shelf', () => {
    render(
      <BrowserRouter>
        <HomePage books={books} onShelfChange={onShelfChange} />
      </BrowserRouter>
    );
    const select = screen.getByText('Book 1').parentElement.querySelector('select');
    fireEvent.change(select, { target: { value: 'read' } });
    expect(onShelfChange).toHaveBeenCalledWith(books[0], 'read');
  });
});
