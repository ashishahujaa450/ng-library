import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddAuthorComponent } from "./add-author/add-author.component";
import { AuthorListingComponent } from "./author-listing/author-listing.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { BookListingComponent } from "./book-listing/book-listing.component";
import { IssueNewBookComponent } from "./issue-new-book/issue-new-book.component";
import { IssuedListingComponent } from "./issued-listing/issued-listing.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { IssuedBookDetailComponent } from "./issued-book-detail/issued-book-detail.component";
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { StudentRegisterComponent } from './login/student-register/student-register.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentHeaderComponent } from './student-header/student-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    AddAuthorComponent,
    AuthorListingComponent,
    AddBookComponent,
    BookListingComponent,
    IssueNewBookComponent,
    IssuedListingComponent,
    ChangePasswordComponent,
    PageNotFoundComponent,
    IssuedBookDetailComponent,
    AdminLoginComponent,
    StudentRegisterComponent,
    StudentLoginComponent,
    StudentDashboardComponent,
    StudentHeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
