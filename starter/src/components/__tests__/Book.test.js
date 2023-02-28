import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Book from '../Book';

describe('Book component', () => {
  const book = {
    id: 'book1',
    title: 'Book 1',
    authors: ['Author 1'],
    imageLinks: {
      thumbnail: 'http://placehold.it/128x193?text=Book+1',
    },
    shelf: 'currentlyReading',
  };
  const onShelfChange = jest.fn();

  test('renders the book correctly', () => {
    render(
      <Book book={book} onShelfChange={onShelfChange} />
    );
    const bookTitle = screen.getByText('Book 1');
    const bookAuthor = screen.getByText('Author 1');
    const bookImage = screen.getByText('', {selector: '.book-cover'});
    const bookSelect = screen.getByText('', {selector: '.book-shelf-changer select'});
    expect(bookTitle).toBeInTheDocument();
    expect(bookAuthor).toBeInTheDocument();
    expect(bookImage).toHaveStyle('background-image: url(http://placehold.it/128x193?text=Book+1)');    
    expect(bookSelect).toHaveValue('currentlyReading');
  });

  test('calls onShelfChange when the book is moved to a different shelf', () => {
    render(
      <Book book={book} onShelfChange={onShelfChange} />
    );
    const bookSelect = screen.getByText('', {selector: '.book-shelf-changer select'});
    fireEvent.change(bookSelect, { target: { value: 'wantToRead' } });
    expect(onShelfChange).toHaveBeenCalledWith(book, 'wantToRead');
  });
});
