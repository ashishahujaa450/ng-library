import { Component, OnInit } from "@angular/core";
import { AuthorService } from "../services/author.service";
import { BookService } from "../services/book.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  totalBooks: number;
  totalAuthors: number;

  constructor(
    private authorSerivce: AuthorService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.totalBooks = this.bookService.getBooks.length;
    this.totalAuthors = this.authorSerivce.getAuthor.length;
  }
}
