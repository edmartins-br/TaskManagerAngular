import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable()
export class TaskService {

  constructor() { }

  listAll(): Task[] { // returns an array os tasks
    const tasks = localStorage['tasks']; // array key / value
    return tasks ? JSON.parse(tasks) : [];
  }

  register(task: Task): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findById(id: number): Task {
    const tasks: Task[] = this.listAll();
    return tasks.find(task => task.id === id);
  }

  update(task: Task): void {
    const tasks: Task[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  remove(id: number): void {
    let tasks: Task[] = this.listAll();
    tasks = tasks.filter(task => task.id !== id); // filter returns all the tasks filtered according to the given conditions
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  changeStatus(id: number): void {
    const tasks: Task[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (id == obj.id) {
        objs[index].done = !obj.done;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

}
