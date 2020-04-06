import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
import { CanActivateGuard } from "./guards/can-activate.guard";
import { CanDeactivateGuard } from "./add-author/can-deactivate.guard";
import { AdminLoginComponent } from "./login/admin-login/admin-login.component";
import { StudentLoginComponent } from "./login/student-login/student-login.component";
import { StudentRegisterComponent } from "./login/student-register/student-register.component";
import { StudentDashboardComponent } from "./student-dashboard/student-dashboard.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    children: [
      { path: "admin", component: AdminLoginComponent },
      { path: "", redirectTo: "admin", pathMatch: "full" },
      { path: "student", component: StudentLoginComponent },
      { path: "student-register", component: StudentRegisterComponent }
    ]
  },
  { path: "", redirectTo: "/login/admin", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "add-author",
    component: AddAuthorComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: "author-listing",
    component: AuthorListingComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "add-book",
    component: AddBookComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "book-listing",
    component: BookListingComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "issue-new-book",
    component: IssueNewBookComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "issued-listing",
    component: IssuedListingComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "change-password",
    component: ChangePasswordComponent,
    canActivate: [CanActivateGuard]
  },
  { path: "student-dashboard", component: StudentDashboardComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
