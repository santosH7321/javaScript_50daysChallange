// Activity 1: Object creation and access

// Task 1
const book = [
  {
    title: "journy of sky",
    author: "Santosh Kumar",
    year: "2002",
  },
];
console.log(book);

// Task 2

const title = book[0].title;
const author = book[0].author;

console.log("Title: ", title);
console.log("Author: ", author);

// Activity 2: Object Methods

// Task 3

const newBook = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
  },
];
newBook.push({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: "1925",
});

console.log(newBook);

// Task 4

const book1 = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    updateYear: function (newYear) {
      this.year = newYear;
    },
  },
];

const title1 = book1[0].title;
const author1 = book1[0].author;

console.log("Title:", title1);
console.log("Author:", author1);

// Updating the year
book1[0].updateYear("2024");

console.log("Updated book object:", book1[0]);

// Activity 3: Nested Object

// Task 5

const library = [
    {
      name: "My Library",
      books: [
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          year: "1960",
        },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          year: "1925",
        },
      ],
    },
  ];
  
console.log(library[0].books[0].title);


// Task 6

const bookTitles = library[0].books.map(book => book.title);
console.log("Book Titles in the Library:", bookTitles);


// Activity 4: The this keyword

// Task 7

const book2 = {
  title: "Journey of sky",
  year: 2005,
  greet: function () {
    console.log(`Hello, my book title is ${this.title} and I am public in ${this.year}`);
  },
};
console.log(book2)

