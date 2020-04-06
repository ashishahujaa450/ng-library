import { Component, OnInit } from "@angular/core";
import { AdminLoginService } from "../services/admin-login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"]
})
export class ChangePasswordComponent implements OnInit {
  public oldPwd: string = "";
  public newPwd: string = "";
  public reNewPwd: string = "";
  public validate: boolean = false;

  public pwdNotMatch: boolean = true;
  public rePwdMatch: boolean = true;

  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  checkOldPwd(ev: any) {
    ev.preventDefault();
    if (this.oldPwd !== this.adminLoginService.adminUserPwd) {
      this.pwdNotMatch = false;
    } else {
      this.pwdNotMatch = true;
    }
  }

  checkRePwd(ev: Event) {
    ev.preventDefault();
    if (this.reNewPwd === this.newPwd) {
      this.rePwdMatch = true;
      this.validate = true;
    } else {
      this.rePwdMatch = false;
    }
  }

  changePwd(ev: Event) {
    ev.preventDefault();
    this.adminLoginService.changePwd(this.reNewPwd);
    this.router.navigate(["login"]);
  }
}
