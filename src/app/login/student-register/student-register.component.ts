import { Component, OnInit } from "@angular/core";
import { StudentRegisterationService } from "src/app/services/student-registeration.service";
import { student } from "src/app/app.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-student-register",
  templateUrl: "./student-register.component.html",
  styleUrls: ["./student-register.component.scss"]
})
export class StudentRegisterComponent implements OnInit {
  public stdName: string = "";
  public stdUserName: string = "";
  public stdPwd: string = "";

  constructor(
    private stdRegisterService: StudentRegisterationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registerStd(ev: Event) {
    ev.preventDefault();

    const student: student = {
      name: this.stdName,
      userName: this.stdUserName,
      password: this.stdPwd
    };

    this.stdRegisterService.registerStudent(student);

    this.router.navigate(["login", "student"]);
  }
}
