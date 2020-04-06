import { Injectable } from "@angular/core";
import { Author } from "../app.model";

@Injectable({
  providedIn: "root"
})
export class AuthorService {
  private authorList: Author[] = [];

  constructor() {}

  get getAuthor() {
    return this.authorList;
  }

  addAuthor(item: Author) {
    //attach id
    item.id =
      this.authorList.length > 0
        ? this.authorList[this.authorList.length - 1].id + 1
        : 1;

    //attach date
    item.creationDate = new Date().getDate();

    this.authorList.push(item);
  }

  removeAuthor(id: number) {
    const index = this.authorList.findIndex((elm: Author) => elm.id === id);
    this.authorList.splice(index, 1);
  }

  updateAuthor(id: number, name: string) {
    this.authorList.forEach((elm: Author) => {
      if (elm.id === id) {
        elm.name = name;
      }
    });
  }

  getNameFromId(id: number): string {
    return this.authorList.find(elm => elm.id === id).name;
  }

  getAuthorFromName(name: string): Author {
    return this.authorList.find(elm => elm.name === name);
  }
}
