import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  mergeAll,
  Observable,
} from 'rxjs';
import {
  filter,
  map,
} from 'rxjs/operators';
import { TodoItem } from '../../shared/interfaces/todo-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {
  private todos$ = new BehaviorSubject<TodoItem[]>([]);
  private readonly filters: Record<string, boolean> = {
    "active": false,
    "completed": true
  }

  getTodos$(): Observable<TodoItem[]> {
    return this.todos$.asObservable();
  }

  getFiltered$(state: string): Observable<any> {
    return this.getTodos$().pipe(
      filter(list => list.some(item => this.filters[state] ? item.isCompleted === this.filters[state] : true)),
    )
  }

  getTodos(): TodoItem[] {
    return this.todos$.getValue();
  }

  isAllCompleted$(): Observable<any> {
    return this.todos$.pipe(
      map(list => list.every(item => item.isCompleted))
    )
  }

  hasTodoName(name: string): boolean {
    return this.getTodos().some(item => item.name === name);
  }

  addTodo(todoItem: TodoItem): void {
    const todos = this.getTodos();

    this.setTodos([...todos, todoItem])
  }

  updateTodo(todoItem: TodoItem): void {
    if(!todoItem.name) {
      this.removeTodoById(todoItem.id);
    }

    const todos = this.getTodos().map(item => {
      if(todoItem.id === item.id) {
        return todoItem;
      }

      return item
    });

    this.setTodos(todos)
  }

  removeTodoById(id: string): void {
    const todos = this.getTodos().filter(item => item.id !== id);

    this.setTodos(todos);
  }

  clearCompleteTodos(): void {
    const todos = this.getTodos().filter(item => !item.isCompleted);

    this.setTodos(todos);
  }

  setTodos(todos: TodoItem[]): void {
    this.todos$.next(todos);
  }
}
