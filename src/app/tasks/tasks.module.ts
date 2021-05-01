import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from './shared'; // imported by autoimport extension



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
