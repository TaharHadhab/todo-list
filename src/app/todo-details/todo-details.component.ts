import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  task$: Observable<any>;
 
  constructor(private todoListService: TodoListService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.task$ = this.route.queryParams.pipe(
      map(params => this.todoListService.getTaskFromList(params.id))
    );
  }
}
