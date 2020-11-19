import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  taskForm = new FormGroup ({
    title: new FormControl(''),
    description: new FormControl(''),
    storypoint: new FormControl('')
  });

  task: Task = this.taskForm.value;

  constructor(private taskService: TaskService) {  }

 /* addTask(task): void {
    this.taskService.addTask(task).subscribe( data => {
      console.log(data);
    });
  }*/

  ngOnInit(): void {
  }

}
