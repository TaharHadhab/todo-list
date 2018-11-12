import {Action} from '@ngrx/store';
import { Task } from 'src/app/models/task';

export const UPDATE_TODO_LIST = '[TodoList] Update todo list';


export class UpdateTodoList implements Action {
  readonly type = UPDATE_TODO_LIST;

  constructor(public payload: Task[]) {}

}

export type All = UpdateTodoList;
