import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StudentRegisterationService } from "src/app/services/student-registeration.service";

@Component({
  selector: "app-student-login",
  templateUrl: "./student-login.component.html",
  styleUrls: ["./student-login.component.scss"]
})
export class StudentLoginComponent implements OnInit {
  public stdLoginUserName: string = "";
  public stdLoginPwd: string = "";

  constructor(
    private router: Router,
    private stdRegisterService: StudentRegisterationService
  ) {}

  ngOnInit(): void {}

  stdLogin(ev: Event) {
    ev.preventDefault();

    const data = {
      userName: this.stdLoginUserName,
      pwd: this.stdLoginPwd
    };

    const rollNo = this.stdRegisterService.findUser(data);

    if (rollNo) {
      //let use logged in
      this.router.navigate(["student-dashboard"], {
        queryParams: { rollNo: rollNo }
      });
    } else {
      alert("Please enter correct details");
    }
  }
}
