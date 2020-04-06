import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthorService } from "../services/author.service";
import { Author } from "../app.model";

@Component({
  selector: "app-author-listing",
  templateUrl: "./author-listing.component.html",
  styleUrls: ["./author-listing.component.scss"]
})
export class AuthorListingComponent implements OnInit {
  public authorListing: Author[];

  constructor(private router: Router, private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorListing = this.authorService.getAuthor;
  }

  deleteAuthor(ev: any) {
    ev.preventDefault();

    const id: number = +ev.target.parentElement.parentElement.getAttribute(
      "id"
    );
    this.authorService.removeAuthor(id);
  }

  editAuthor(ev: any) {
    ev.preventDefault();

    const id: number = +ev.target.parentElement.parentElement.getAttribute(
      "id"
    );

    this.router.navigate(["add-author"], {
      queryParams: { editMode: true, id: id }
    });
  }
}
