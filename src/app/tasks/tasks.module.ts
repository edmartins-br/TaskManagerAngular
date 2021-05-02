import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from './shared';
import { ListTaskComponent } from './list-task'; // imported by autoimport extension



@NgModule({
  declarations: [
    ListTaskComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
