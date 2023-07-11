import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces';
import { FilterStatusDateEnum, TaskStatusEnum } from '../enums';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskStatus = TaskStatusEnum;
  tasks: Task[] = []
  statusSort: TaskStatusEnum = TaskStatusEnum.Pending
  dates: { id: number, name: string }[] = []
  selectedDate: FilterStatusDateEnum = FilterStatusDateEnum.Today
  constructor() { }
  getDate(days: number) {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + days)
    return currentDate
  }
  ngOnInit(): void {
    this.dates = [{
      id: FilterStatusDateEnum.Today,
      name: "Creadas Hoy"
    },
    {
      id: FilterStatusDateEnum.PriorClass,
      name: "Clase Anterior"
    },
    {
      id: FilterStatusDateEnum.Last7Days,
      name: "Último 7 días"
    }]

    this.tasks = [{
      creationDate: new Date(),
      dueDate: undefined,
      id: 1,
      name: "Suma 2 + 2",
      status: TaskStatusEnum.Pending,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: undefined,
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 2,
      name: "Division 2 / 2",
      status: TaskStatusEnum.Published,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: new Date(),
      id: 3,
      name: "Multiplicacion 2 x 2",
      status: TaskStatusEnum.Dued,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 1,
      name: "Suma 2 + 2",
      status: TaskStatusEnum.Pending,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: undefined,
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 2,
      name: "Division 2 / 2",
      status: TaskStatusEnum.Published,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: new Date(),
      id: 3,
      name: "Multiplicacion 2 x 2",
      status: TaskStatusEnum.Dued,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 1,
      name: "Suma 2 + 2",
      status: TaskStatusEnum.Pending,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: undefined,
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 2,
      name: "Division 2 / 2",
      status: TaskStatusEnum.Published,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: new Date(),
      id: 3,
      name: "Multiplicacion 2 x 2",
      status: TaskStatusEnum.Dued,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 1,
      name: "Suma 2 + 2",
      status: TaskStatusEnum.Pending,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: undefined,
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 2,
      name: "Division 2 / 2",
      status: TaskStatusEnum.Published,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: new Date(),
      id: 3,
      name: "Multiplicacion 2 x 2",
      status: TaskStatusEnum.Dued,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 1,
      name: "Suma 2 + 2",
      status: TaskStatusEnum.Pending,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: undefined,
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: undefined,
      id: 2,
      name: "Division 2 / 2",
      status: TaskStatusEnum.Published,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },
    {
      creationDate: new Date(),
      dueDate: new Date(),
      id: 3,
      name: "Multiplicacion 2 x 2",
      status: TaskStatusEnum.Dued,
      detail: undefined,
      link: undefined,
      urlImg: undefined,
      publishDate: new Date(),
      students: []
    },]
  }

  sortByStatus() {
    this.statusSort = this.statusSort == TaskStatusEnum.Dued ? TaskStatusEnum.Pending : this.statusSort + 1
    this.tasks.sort((x, y) => x.status == this.statusSort ? -1 : y.status == this.statusSort ? 1 : 0);
  }

}
