import { Component, OnInit} from '@angular/core';
import { Task } from '../models/task';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  tasks: Task[] = [{ title: 'Acheter du lait', done: false },
  { title: 'Appeler assurance', done: false },
  { title: 'Changer abonnement téléphonique', done: false },
  { title: 'Acheter cadeaux noel', done: false },
  { title: 'Appeler parents', done: false },
  { title: 'Reserver restaurant', done: false },
  { title: 'Payer taxe habitation', done: false },
  { title: 'Preparer entretien', done: false }];

  constructor() { }

  ngOnInit() {}

  onChange($event,task) {
    this.tasks = this.tasks.filter(it => it !== task);
     if($event.checked){
      task.done = true;
      this.tasks.push(task);
    } else{
      task.done = false;
      this.tasks.splice(0,0,task);
    }
  }

  onClickTodo(task){
    console.log('task:',task);
  }
}
