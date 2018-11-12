import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as TodoListReducer from 'src/app/ngrx/reducers/todoList.reducer';
import { Task } from 'src/app/models/task';

export interface State {
  tasks: Task[];
}

export const reducers: ActionReducerMap<State> = {
  tasks: TodoListReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


// import {User} from '@app/models/user';
// import {ActionReducerMap} from '@ngrx/store';
// import {Authentification} from '@app/models/authentification';
// import * as AuthentificationReducer from '@app/ngrx/reducers/authentification.reducer';
// import { Task } from 'src/app/models/task';

// export interface State {
//   authentification: Authentification;
// }

// export const initialState: State = {
//   authentification: AuthentificationReducer.initialState
// };

// export const reducers: ActionReducerMap<State> = {
//   authentification: AuthentificationReducer.reducer
// };

