export interface Author {
  name?: string;
  id?: number;
  creationDate?: number;
}

export interface Book {
  name?: string;
  id?: number;
  Isbn?: number;
  price?: number;
  copies?: number;
  author?: Author;
  creationDate?: number;
}

export interface IssuedBook {
  rollNo?: number;
  book?: Book;
  issueBookDate?: number;
  id?: number;
}

export interface student {
  rollNo?: number;
  name?: string;
  userName?: string;
  password?: string;
  registerationDate?: number;
}
