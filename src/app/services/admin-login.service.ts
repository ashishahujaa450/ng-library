import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AdminLoginService {
  private isLoggedIn: boolean = false;
  public adminUserName: string = "admin";
  public adminUserPwd: string = "admin";

  constructor() {}

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  status(): boolean {
    return this.isLoggedIn;
  }

  changePwd(newPwd: string) {
    this.adminUserPwd = newPwd;
  }
}
