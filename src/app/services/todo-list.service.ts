import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/ngrx/reducers';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private store: Store<State>) { }

  getList(): Observable<Task[]> {
    return this.store.select(state => state.tasks);
  }

  getTaskFromList(tasks:Task[], id: number): any {
    return tasks.find(task => task.id == id);
  }

}
