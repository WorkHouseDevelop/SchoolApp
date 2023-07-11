import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { TasksComponent } from './tasks/tasks.component';
const routes: Routes = [
  {
    path: "",
    component: AttendanceComponent
  },
  {
    path: "tasks",
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
