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

  remove($event: any, task: Task): void {
    $event.preventDefault(); // disable pge update - necessary to remove
    if (confirm('Deseja rmover a tarefa "' + task.name +'"?'))
      this.TaskService.remove(task.id);
      this.tasks = this.listAll();
  }

  changeStatus(task: Task): void {
    if (confirm('Deseja alterar o status da tarefa "' + task.name + '"?'))
    this.TaskService.changeStatus(task.id);
    this.tasks = this.listAll();
  }

}
