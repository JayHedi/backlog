import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor( private taskService: TaskService ) { }
/*
  deleteTask(task: Task): void{
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService.deleteTask(task.title).subscribe();
  }

  /*getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }*/

  getTasks(): void {
    this.taskService.getAll();
    /*this.taskService.getAll().subscribe( data => {
      console.log('hello');
      this.tasks = data;
    });*/
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
