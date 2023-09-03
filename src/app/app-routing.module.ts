import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { AttendanceComponent } from './attendance/attendance.component';
const routes: Routes = [
  {
    path: "chat/:id",
    component: LocationComponent

  },
  {
    path: "",
    component: UsersComponent

  },

  // {
  //   path: "",
  //   component: AttendanceComponent
  // },
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
