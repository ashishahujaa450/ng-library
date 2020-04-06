import { Component, OnInit } from "@angular/core";

import { Author } from "../app.model";
import { AuthorService } from "../services/author.service";
import {
  ActivatedRoute,
  Route,
  Router,
  Params,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { canDeactivateComponent } from "./can-deactivate.guard";
import { Observable } from "rxjs";

@Component({
  selector: "app-add-author",
  templateUrl: "./add-author.component.html",
  styleUrls: ["./add-author.component.scss"]
})
export class AddAuthorComponent implements OnInit, canDeactivateComponent {
  public authorName: string = "";
  public editAuthor: boolean = false;
  public editAuthorId: number = null;

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentRoute.queryParams.subscribe((params: Params) => {
      this.editAuthor = params["editMode"];
      this.editAuthorId = +params["id"];

      if (this.editAuthor) {
        this.authorName = this.authorService.getNameFromId(this.editAuthorId);
      }
    });
  }

  addAuthor(ev: Event) {
    ev.preventDefault();

    if (this.editAuthor) {
      if (this.authorName === "") {
        alert("please enter correct name");
      } else {
        this.authorService.updateAuthor(this.editAuthorId, this.authorName);
        //routing
        this.router.navigate(["author-listing"]);
      }
    } else {
      if (this.authorName === "") {
        alert("please enter correct name");
      } else {
        const author: Author = {
          name: this.authorName
        };

        this.authorService.addAuthor(author);

        //routing
        this.router.navigate(["author-listing"]);
      }
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (
      this.editAuthor &&
      this.authorService.getNameFromId(this.editAuthorId) !== this.authorName
    ) {
      return confirm("do you want to discard changes?");
    } else {
      return true;
    }
  }
}
