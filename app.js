function Book(title, author) {
  this.title = title;
  this.author = author;

  this.enshelf = function(library, shelf) {
    library.shelves[shelf].books.push(this);
  };

  this.unshelf = function(library, shelf) {
    var books = library.shelves[shelf].books;
    var len = books.length;

    for (var i = 0; i < len; i++) {
      if (books[i] === this) {
        return books.splice(i, 1);
      }
    }
  };
}

function Shelf(books) {
  this.books = books || [];
}

function Library(shelves) {
  this.shelves = shelves || [];
}

var lib = new Library([new Shelf(), new Shelf(), new Shelf()]);
var moby = new Book("Moby Dick", "Melville");
var moby2 = new Book("Moby Dick", "Melville");
var moby3 = new Book("Moby Dick", "Melville");
var budd = new Book("Billy Budd", "Melville");
var budd2 = new Book("Billy Budd", "Melville");
lib.shelves[0].books = [moby, budd];
lib.shelves[1].books = [budd2, moby2];
lib.shelves[2].books = [moby3];
