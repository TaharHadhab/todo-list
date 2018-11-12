import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  Tasks: Task[] = [
    { id: 1, title: 'Acheter du lait', done: false, description: 'description détaillée de la tache "acheter du lait"' },
    { id: 2, title: 'Appeler assurance', done: false, description: 'description détaillée de la tache "appeler assurance"' },
    { id: 3, title: 'Changer abonnement téléphonique', done: false, description: 'description détaillée de la tache "Changer abonnement téléphonique"' },
    { id: 4, title: 'Acheter cadeaux noel', done: false, description: 'description détaillée de la tache "Acheter cadeaux noel"' },
    { id: 5, title: 'Appeler parents', done: false, description: 'description détaillée de la tache "Appeler parents"' },
    { id: 6, title: 'Reserver restaurant', done: false, description: 'description détaillée de la tache "Reserver restaurant"' },
    { id: 7, title: 'Payer taxe habitation', done: false, description: 'description détaillée de la tache "Payer taxe habitation"' },
    { id: 8, title: 'Preparer entretien', done: false, description: 'description détaillée de la tache "Preparer entretien"' }
  ];

  constructor() { }

  getList(): Task[] {
    return this.Tasks;
  }

  getTaskFromList(id: number): any {
    return this.Tasks.find(task => task.id == id);
  }

}
