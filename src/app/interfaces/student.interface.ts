import { StudentStatusEnum } from "../enums";

export interface Student {
  id: number,
  name: string,
  status: StudentStatusEnum,
  attendanceDate: Date,
  urlImg: String,
  excuseReason?: String | undefined
}
