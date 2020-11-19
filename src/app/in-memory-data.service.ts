import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { title: 'task 1', description: 'this a description', storypoint: 3},
      { title: 'task 2', description: 'this a description', storypoint: 3},
      { title: 'task 3', description: 'this a description', storypoint: 3},
      { title: 'task 4', description: 'this a description', storypoint: 3},
      { title: 'task 5', description: 'this a description', storypoint: 3},
      { title: 'task 6', description: 'this a description', storypoint: 3},
      { title: 'task 7', description: 'this a description', storypoint: 3},
      { title: 'task 8', description: 'this a description', storypoint: 3},
      { title: 'task 9', description: 'this a description', storypoint: 3},
      { title: 'task 10', description: 'this a description', storypoint: 3}
    ];
    return {tasks};
  }
}
