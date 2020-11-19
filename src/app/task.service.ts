import { Injectable } from '@angular/core';
import { Task } from './models/task';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAll(): Observable<Task[]>{
    return this.httpClient.get<Task[]>('http://localhost:3000/tasks');
  }

  /*deleteTask(taskTitle): Observable<Task>{
    const taskUrl = 'http://localhost:3000/tasks/' + taskTitle;
    return this.httpClient.delete<Task>(taskTitle);
  }

  addTask(task: Task): Observable<Task>{
    console.log('3');
    const url = 'http://localhost:3000/tasks';
    return this.httpClient.post<Task>(url , task);
  }
  /*addTask(task: Task): Observable<Task>{
    const taskUrl = 'http://localhost:3000/tasks';
    return this.http.post<Task>(task);
  }*/
}
