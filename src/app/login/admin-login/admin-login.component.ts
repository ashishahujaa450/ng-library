import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AdminLoginService } from "../../services/admin-login.service";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.scss"]
})
export class AdminLoginComponent implements OnInit {
  public userName: string = "";
  public userPwd: string = "";

  constructor(
    private router: Router,
    private adminLoginService: AdminLoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  login(ev: Event) {
    ev.preventDefault();

    if (
      this.userName === this.adminLoginService.adminUserName &&
      this.userPwd === this.adminLoginService.adminUserPwd
    ) {
      //let user login
      this.adminLoginService.login();
      this.router.navigate(["dashboard"]);
    } else {
      alert("wrong Credentials!");
    }
  }

  studentLoginPage() {
    this.router.navigate(["login", "student"]);
  }

  studentRegisterPage() {
    this.router.navigate(["login", "student-register"]);
  }
}
