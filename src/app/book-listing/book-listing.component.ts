import { Component, OnInit } from "@angular/core";
import { BookService } from "../services/book.service";
import { Book } from "../app.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-listing",
  templateUrl: "./book-listing.component.html",
  styleUrls: ["./book-listing.component.scss"]
})
export class BookListingComponent implements OnInit {
  public bookList: Book[];

  constructor(
    private bookService: BookService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBooks;
  }

  deleteBook(ev: any) {
    const id = +ev.target.parentElement.parentElement.getAttribute("id");
    this.bookService.removeBook(id);
  }

  editBook(ev: any) {
    ev.preventDefault();
    const id = +ev.target.parentElement.parentElement.getAttribute("id");
    this.router.navigate(["add-book"], {
      queryParams: { editMode: true, id: id }
    });
  }
}
