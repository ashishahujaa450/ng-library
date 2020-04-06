import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminLoginService } from "../services/admin-login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private adminLoginService: AdminLoginService
  ) {}

  ngOnInit(): void {}

  logtout(ev: Event) {
    ev.preventDefault();
    this.adminLoginService.logout();
    this.router.navigate(["login"]);
  }
}
