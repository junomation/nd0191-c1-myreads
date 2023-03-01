# **MyReads Project**
This project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. It is built using React and the BooksAPI from Udacity.

## **How to Use**
## Installation
To use this app, you need to have Node.js and npm installed on your machine. You can download Node.js and npm from the official Node.js website.

Clone or download the project from the Github repository:

```bash
git clone https://github.com/junomation/nd0191-c1-myreads.git
```

Install dependencies by running the following command in the project directory:

```bash
npm install
```
Running the App
Start the development server by running the following command in the project directory:

```bash
npm start
```

The app will be opened automatically in your browser at http://localhost:3000.

## Using the App

On the main page, you will see three shelves: "Currently Reading", "Want to Read", and "Read". You can add books to these shelves by clicking on the "Add a book" button in the bottom right corner of the screen. This will take you to the search page, where you can search for books using keywords such as author name or book title.

Once you have found a book you want to add, you can click on the dropdown menu on the book cover and select the shelf you want to add it to. You can also remove books from a shelf by selecting "None" from the dropdown menu.

## **React Components and Unit Testing**
This project uses React components to create a bookshelf application. The components are:

* `App`: The main component that holds the state of the application and renders the other components.
* `Book`: A component that displays a single book and allows the user to move it between bookshelves.
* `BookShelf`: A component that displays a bookshelf and the books on it.
* `HomePage`: A component that displays the main page of the application, which contains three bookshelves.
* `SearchPage`: A component that displays the search page of the application, which allows the user to search for  books and add them to their bookshelves.

To run the unit tests for this project, you can use the command:
```
npm test
``` 
This will run all of the tests located in the \`__tests__\` folder. The tests are written using the Jest testing framework and the React Testing Library. Each component has its own set of tests, located in a separate file in the \`__tests__\` folder.

To run a specific set of tests, you can use the \``npm test <filename>`\` command, where \``<filename>`\` is the name of the file that contains the tests you want to run. For example, to run the tests for the \``Book`\` component, you would use the command \``npm test Book.test.js`\`.

When you run the tests, Jest will automatically find and run all of the tests in the specified file(s). If any of the tests fail, Jest will display an error message with details about the failure. If all of the tests pass, Jest will display a message indicating that all tests have passed.

## **Acknowledgements**
This project was created as part of the Udacity Front-End Web Developer Nanodegree program. The starter code for the project was provided by Udacity.