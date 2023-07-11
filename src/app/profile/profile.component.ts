import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentStatusEnum } from '../enums';
import { Student } from '../interfaces';
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input('student') student: Student;
  @Output("changeUpdate") changeUpdate: EventEmitter<any> = new EventEmitter();

  studentStatus = StudentStatusEnum;
  colorsMap: Map<StudentStatusEnum, string>;
  statusFilter: StudentStatusEnum;
  constructor() {
    this.colorsMap = new Map<StudentStatusEnum, string>()
    this.colorsMap.set(StudentStatusEnum.Pending, "white")
    this.colorsMap.set(StudentStatusEnum.Present, "#14A44D")
    this.colorsMap.set(StudentStatusEnum.Absent, "#DC4C64")
    this.colorsMap.set(StudentStatusEnum.Excuse, "#E4A11B")
  }

  ngOnInit(): void {
  }
  getColorByStatus() {
    return this.colorsMap.get(this.student.status) ?? "orange"
  }
  getCurrentDate() {
    const currentDate = new Date()
    return this.student.attendanceDate.getDate() == currentDate.getDate() ? 'Hoy' : moment(this.student.attendanceDate).calendar()
  }
  changeStatus(student: Student): void {
    let nextStatus = student.status == StudentStatusEnum.Excuse ? StudentStatusEnum.Pending : student.status + 1
    student.status = nextStatus
    this.changeUpdate.emit()
  }
  saveStudent(student: Student) {
    console.log(student)
  }
}
