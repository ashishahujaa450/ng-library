import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Book } from "../app.model";
import { AuthorService } from "../services/author.service";
import { BookService } from "../services/book.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.scss"]
})
export class AddBookComponent implements OnInit {
  public BookAddedDetails;
  @ViewChild("bookAuthorSelectBox") selectBox: ElementRef;
  public isValidate: boolean = true;

  public editBookMode: boolean = false;
  public editBookId: number = null;

  constructor(
    private authorSerivce: AuthorService,
    private bookService: BookService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.BookAddedDetails = {
      bookName: "",
      author: this.authorSerivce.getAuthor,
      Isbn: "",
      bookPrice: "",
      bookQuantity: "",
      selectedAuthor: ""
    };

    this.currentRoute.queryParams.subscribe((params: Params) => {
      this.editBookMode = params["editMode"];
      this.editBookId = +params["id"];
    });

    if (this.editBookMode) {
      const selectedBook = this.bookService.getBookFromId(this.editBookId);

      this.BookAddedDetails.bookName = selectedBook.name;
      this.BookAddedDetails.Isbn = selectedBook.Isbn;
      this.BookAddedDetails.bookPrice = selectedBook.price;
      this.BookAddedDetails.bookQuantity = selectedBook.copies;
    }
  }

  validateIsbn(ev: any) {
    ev.preventDefault();

    const isbnNumber = ev.target.value;
    if (this.bookService.checkIsbnExist(parseInt(isbnNumber))) {
      this.isValidate = false;
    } else {
      this.isValidate = true;
    }
  }

  addBook(ev: Event) {
    ev.preventDefault();

    const selectedAuthor = this.getSelectedAuthor(this.selectBox.nativeElement);

    this.BookAddedDetails.selectedAuthor = this.authorSerivce.getAuthorFromName(
      selectedAuthor
    );

    const BookData: Book = {
      name: this.BookAddedDetails.bookName,
      Isbn: this.BookAddedDetails.Isbn,
      price: this.BookAddedDetails.bookPrice,
      copies: this.BookAddedDetails.bookQuantity,
      author: this.BookAddedDetails.selectedAuthor
    };

    if (this.editBookMode) {
      this.bookService.updateBook(this.editBookId, BookData);
    } else {
      this.bookService.addBook(BookData);
    }

    //routing
    this.router.navigate(["book-listing"]);
  }

  getSelectedAuthor(elm): string {
    var opt;
    for (var i = 0, len = elm.options.length; i < len; i++) {
      opt = elm.options[i];
      if (opt.selected === true) {
        break;
      }
    }
    return opt.textContent;
  }
}
