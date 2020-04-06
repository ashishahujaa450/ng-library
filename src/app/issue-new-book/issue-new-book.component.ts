import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { IssueBookService } from "../services/issue-book.service";
import { BookService } from "../services/book.service";
import { Book, IssuedBook } from "../app.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-issue-new-book",
  templateUrl: "./issue-new-book.component.html",
  styleUrls: ["./issue-new-book.component.scss"]
})
export class IssueNewBookComponent implements OnInit {
  @ViewChild("studentRollNumber") stdRollNumber: ElementRef;

  public bookIsbn: number;
  public selectedBook: Book;
  public bookFinded: boolean = true;

  constructor(
    private issueBookService: IssueBookService,
    private bookSerivce: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  findBookByIsbn(ev: Event) {
    ev.preventDefault();
    this.selectedBook = this.bookSerivce.getBookFromIsbn(this.bookIsbn);
    if (this.selectedBook) {
      this.bookFinded = true;
    } else {
      this.bookFinded = false;
    }
  }

  onIssueBook(ev: Event) {
    ev.preventDefault();

    const issuedBookItem: IssuedBook = {
      rollNo: parseInt(this.stdRollNumber.nativeElement.value),
      book: this.selectedBook
    };

    this.issueBookService.isseBook(issuedBookItem);

    this.router.navigate(["issued-listing"]);
  }
}
