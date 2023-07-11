import { TaskStatusEnum } from "../enums";
import { Student } from "./student.interface";

export interface Task {
  id: number,
  name: string,
  status: TaskStatusEnum,
  creationDate: Date,
  publishDate?: Date | undefined,
  dueDate?: Date | undefined,
  urlImg?: String | undefined,
  detail?: String | undefined,
  link?: String | undefined,
  students: Student[]
}
