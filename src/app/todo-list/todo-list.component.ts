import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/ngrx/reducers';
import * as TodoListActions from "src/app/ngrx/actions/todo.list.actions";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit, OnDestroy {

  tasks: Task[];
  sub: Subscription;

  constructor(private todoListeService: TodoListService, private router: Router, private store: Store<State>) { }

  ngOnInit() { 
   this.sub = this.todoListeService.getList().subscribe(tasks => this.tasks=tasks);
  }

  onChange($event, task) {
    this.tasks = this.tasks.filter(it => it !== task);
    if ($event.checked) {
      task.done = true;
      this.tasks.push(task);
    } else {
      task.done = false;
      this.tasks.splice(0, 0, task);
    }
    this.store.dispatch(new TodoListActions.UpdateTodoList(this.tasks));
  }

  onClickTodo(task) {
    this.router.navigate(['/details'], {
      queryParams: { 'id': task.id }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
