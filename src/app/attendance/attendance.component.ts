import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces';
import { FilterStatusDateEnum, StudentStatusEnum } from '../enums';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  studentStatus = StudentStatusEnum;
  students: Student[] = []
  statusSort: StudentStatusEnum = StudentStatusEnum.Pending
  dates: { id: number, name: string }[] = []
  selectedDate: FilterStatusDateEnum = FilterStatusDateEnum.Today

  isUpdated: boolean = false

  constructor() { }
  getDate(days: number) {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + days)
    return currentDate
  }
  ngOnInit(): void {
    this.dates = [{
      id: FilterStatusDateEnum.Today,
      name: "Hoy"
    },
    {
      id: FilterStatusDateEnum.PriorClass,
      name: "Clase Anterior"
    },
    {
      id: FilterStatusDateEnum.Last7Days,
      name: "Último 7 días"
    }]

    this.students = [{
      id: 1,
      name: "Rihoma Zoe Soto Grullon",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-0),
      urlImg: "https://img.freepik.com/premium-photo/student-girl-with-backpack-smiles-holds-notebook-copybook-folder-white-background_101969-3034.jpg",
      excuseReason: undefined
    },
    {
      id: 2,
      name: "Emy Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-8),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 3,
      name: "Eddy Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-4),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 4,
      name: "Wilson Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-5),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 5,
      name: "Oliver Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-7),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 2,
      name: "Emy Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-8),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 3,
      name: "Eddy Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-4),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 4,
      name: "Wilson Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-5),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 5,
      name: "Oliver Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-7),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 2,
      name: "Emy Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-8),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 3,
      name: "Eddy Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-4),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 4,
      name: "Wilson Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-5),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    },
    {
      id: 5,
      name: "Oliver Soto",
      status: StudentStatusEnum.Pending, // 1 = Pending, 2 = Presente, 3 = Ausente, 4 = Excusa
      attendanceDate: this.getDate(-7),
      urlImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",
      excuseReason: undefined
    }]
  }

  sortByStatus() {
    this.statusSort = this.statusSort == StudentStatusEnum.Excuse ? StudentStatusEnum.Pending : this.statusSort + 1
    this.students.sort((x, y) => x.status == this.statusSort ? -1 : y.status == this.statusSort ? 1 : 0);
  }
  changeIsUpdate() {
    this.isUpdated = true
  }
  save() {
    setTimeout(() => {
      this.isUpdated = false
    }, 1500)
  }
}
