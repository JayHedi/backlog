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

  task: Task;

  taskForm = new FormGroup ({
    title: new FormControl(''),
    description: new FormControl(''),
    storypoint: new FormControl('')
  });

  constructor(private taskService: TaskService) {  }

  addTask(taskAdd: Task): void {
    taskAdd = this.taskForm.value;
    this.taskService.addTask(taskAdd).subscribe( data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
