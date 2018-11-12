import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  tasks: Task[];

  constructor(private todoListeService: TodoListService, private router: Router) { }

  ngOnInit() { 
    this.tasks = this.todoListeService.getList();
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
  }

  onClickTodo(task) {
    // console.log(task);
    this.router.navigate(['/details'], {
      queryParams: { 'id': task.id }
    });
  }
}
