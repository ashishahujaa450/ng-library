import { Injectable } from "@angular/core";
import { Book } from "../app.model";

@Injectable({
  providedIn: "root"
})
export class BookService {
  private bookList: Book[] = [];

  constructor() {}

  get getBooks() {
    return this.bookList;
  }

  addBook(item: Book) {
    //attach id
    item.id =
      this.bookList.length > 0
        ? this.bookList[this.bookList.length - 1].id + 1
        : 1;

    //attach date
    item.creationDate = new Date().getDate();

    this.bookList.push(item);
  }

  removeBook(id: number) {
    const index = this.bookList.findIndex((elm: Book) => elm.id === id);
    this.bookList.splice(index, 1);
  }

  updateBook(id: number, newBook: Book) {
    this.bookList.forEach(elm => {
      if (elm.id === id) {
        Object.assign(elm, newBook);
      }
    });
  }

  checkIsbnExist(isbn: number): boolean {
    const book = this.bookList.find(elm => elm.Isbn === isbn);
    if (book) {
      return true;
    } else {
      return false;
    }
  }

  getBookFromIsbn(isbn: number): Book {
    return this.bookList.find(elm => elm.Isbn === isbn);
  }

  getBookFromId(id: number): Book {
    return this.bookList.find(elm => elm.id === id);
  }
}
