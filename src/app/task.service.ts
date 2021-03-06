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

  deleteTask(taskID): Observable<Task>{
    const taskUrl = 'http://localhost:3000/tasks/' + taskID;
    return this.httpClient.delete<Task>(taskUrl);
  }

  addTask(task: Task): Observable<Task>{
    console.log('3');
    return this.httpClient.post<Task>('http://localhost:3000/tasks' , task);
  }
}
