import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskDoneDirective, TaskService } from './shared';
import { ListTaskComponent } from './list-task'; // imported by autoimport extension

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterTaskComponent } from './register/register-task.component';
import { EditTaskComponent } from './edit/edit-task.component';



@NgModule({
  declarations: [
    ListTaskComponent,
    RegisterTaskComponent,
    EditTaskComponent,
    TaskDoneDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
