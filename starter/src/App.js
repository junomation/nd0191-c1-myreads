import "./App.css";
import Bookshelf from "./components/Bookshelf";
import { useState } from "react";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

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
              books={[
                {
                  title: "To Kill a Mockingbird",
                  author: "Harper Lee",
                  imageLinks:
                    "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                  shelf: "currentlyReading",
                  id: "PGR2AwAAQBAJ",
                },
                {
                  title: "Ender's Game",
                  author: "Orson Scott Card",
                  imageLinks:
                    "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
                  shelf: "currentlyReading",
                  id: "yDtCuFHXbAYC",
                },
              ]}
              updateShelf={() => {}}
              shelf="currentlyReading"
            />
            <Bookshelf
              title="Want to Read"
              books={[
                {
                  title: "1776",
                  author: "David McCullough",
                  imageLinks:
                    "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1",
                  shelf: "wantToRead",
                  id: "uu1mC6zWNTwC",
                },
                {
                  title: "Harry Potter and the Sorcerer's Stone",
                  author: "J.K. Rowling",
                  imageLinks:
                    "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
                  shelf: "wantToRead",
                  id: "iGhCzvuvPGoC",
                },
              ]}
              updateShelf={() => {}}
              shelf="wantToRead"
            />
            <Bookshelf
              title="Read"
              books={[
                  {
                    title: "The Hobbit",
                    author: "J.R.R. Tolkien",
                imageLinks:
                "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
                shelf: "read",
                id: "nOQJAAAACAAJ",
              },
              {
                title: "Oh, the Places You'll Go!",
                author: "Seuss",
                imageLinks:
                "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
                shelf: "read",
                id: "mm5oYngGVjcC",
              },
            ]}
            updateShelf={() => {}}
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