import { Injectable } from "@angular/core";
import { student } from "../app.model";

@Injectable({
  providedIn: "root"
})
export class StudentRegisterationService {
  private studentsList: student[] = [];

  constructor() {}

  get getStudents(): student[] {
    return this.studentsList;
  }

  registerStudent(item: student) {
    //attach roll no
    item.rollNo =
      this.studentsList.length > 0
        ? this.studentsList[this.studentsList.length - 1].rollNo + 1
        : 1;

    //attach date
    item.registerationDate = new Date().getDate();

    this.studentsList.push(item);
  }

  findUser(data: { userName: string; pwd: string }): number {
    let rollNo = null;

    this.studentsList.forEach(elm => {
      if (elm.userName === data.userName && elm.password === data.pwd) {
        rollNo = elm.rollNo;
      }
    });

    return rollNo;
  }

  getStdById(rollNo: number): student {
    return this.studentsList.find(elm => elm.rollNo === rollNo);
  }
}
