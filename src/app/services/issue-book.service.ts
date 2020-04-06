import { Injectable } from "@angular/core";
import { IssuedBook } from "../app.model";

@Injectable({
  providedIn: "root"
})
export class IssueBookService {
  private issuedBookList: IssuedBook[] = [];

  constructor() {}

  get getIssuedBooks() {
    return this.issuedBookList;
  }

  isseBook(item: IssuedBook) {
    //attach id
    item.id =
      this.issuedBookList.length > 0
        ? this.issuedBookList[this.issuedBookList.length - 1].id + 1
        : 1;

    //attach date
    item.issueBookDate = new Date().getDate();

    this.issuedBookList.push(item);
  }

  removeIssueBook(id: number) {
    const index = this.issuedBookList.findIndex(
      (elm: IssuedBook) => elm.id === id
    );
    this.issuedBookList.splice(index, 1);
  }
}
