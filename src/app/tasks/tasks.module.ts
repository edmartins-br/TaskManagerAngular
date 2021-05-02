import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from './shared';
import { ListTaskComponent } from './list-task'; // imported by autoimport extension

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterTaskComponent } from './register/register-task.component';



@NgModule({
  declarations: [
    ListTaskComponent,
    RegisterTaskComponent
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
