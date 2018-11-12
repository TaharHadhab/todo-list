import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from 'src/app/ngrx/reducers';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  task$: Observable<any>;

  constructor(private todoListService: TodoListService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>) { }

  ngOnInit() {
    this.task$ = zip(
        this.route.queryParams,
        this.store.select(state => state.tasks)
      ).pipe(
        map(([params, tasks]) => this.todoListService.getTaskFromList(tasks, params.id))
      );

  }

  goToList() {
    this.router.navigate(['']);
  }
}
