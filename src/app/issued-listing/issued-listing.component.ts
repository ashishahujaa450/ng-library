import { Component, OnInit } from "@angular/core";
import { IssueBookService } from "../services/issue-book.service";
import { IssuedBook } from "../app.model";

@Component({
  selector: "app-issued-listing",
  templateUrl: "./issued-listing.component.html",
  styleUrls: ["./issued-listing.component.scss"]
})
export class IssuedListingComponent implements OnInit {
  public issueBookListing: IssuedBook[];

  constructor(private issueBookSerivce: IssueBookService) {}

  ngOnInit(): void {
    this.issueBookListing = this.issueBookSerivce.getIssuedBooks;
  }
}
