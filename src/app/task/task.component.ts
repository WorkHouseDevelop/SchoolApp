import { Component, Input, OnInit } from '@angular/core';
import { TaskStatusEnum } from '../enums';
import { Task } from '../interfaces';
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input('task') task: Task;

  taskStatus = TaskStatusEnum;
  colorsMap: Map<TaskStatusEnum, string>;
  statusFilter: TaskStatusEnum;
  constructor() {
    this.colorsMap = new Map<TaskStatusEnum, string>()
    this.colorsMap.set(TaskStatusEnum.Pending, "white")
    this.colorsMap.set(TaskStatusEnum.Published, "#14A44D")
    this.colorsMap.set(TaskStatusEnum.Dued, "#E4A11B")
  }

  ngOnInit(): void {
  }
  getColorByStatus() {
    return this.colorsMap.get(this.task.status) ?? "orange"
  }
  getPublishDate(date: Date | undefined) {
    const currentDate = new Date()
    return date?.getDate() == currentDate.getDate() ? 'Hoy' : moment(date).calendar()
  }
  changeStatus(task: Task): void {
    if (task.status == TaskStatusEnum.Dued) return
    task.status = task.status == TaskStatusEnum.Pending ? TaskStatusEnum.Published : TaskStatusEnum.Pending
  }
  saveTask(task: Task) {
    console.log(task)
  }
}
