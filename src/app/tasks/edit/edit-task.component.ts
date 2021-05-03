import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @ViewChild('taskForm') taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    // first we have to get the ID
    let id = +this.route.snapshot.params['id']; //snapshot.params will return the id - the PLUS sign convert the string into a number
    this.task = this.taskService.findById(id);
  }

  update(): void {
    if (this.taskForm.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/tasks']);
    }
  }

}
