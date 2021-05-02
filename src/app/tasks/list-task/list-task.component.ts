import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private TaskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.listAll();
    // this.tasks = [
    //   new Task(1, "Task 01", false),
    //   new Task(2, "Task 02", true)
    // ];
  }

  listAll(): Task[] {
    return this.TaskService.listAll();
  }

}
