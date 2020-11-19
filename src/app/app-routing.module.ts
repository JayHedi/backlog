import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskAddComponent } from './task-add/task-add.component';

const routes: Routes = [
  { path: '', component: TaskListComponent},
  { path: 'task-add', component: TaskAddComponent },
  { path: 'task-detail', component: TaskDetailComponent },
  { path: 'tasks', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ TaskListComponent, TaskAddComponent, TaskDetailComponent];
