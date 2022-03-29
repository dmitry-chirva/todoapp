import { Component, OnInit } from '@angular/core';
import { TodoFactoryService } from '../core/todo-factory/todo-factory.service';
import { TodoStoreService } from '../core/todo-store/todo-store.service';
import { Observable } from 'rxjs';
import { TodoItem } from '../shared/interfaces/todo-item.interface';

@Component({
  selector: 'app-application-container',
  templateUrl: './application-container.component.html',
  styleUrls: ['./application-container.component.scss']
})
export class ApplicationContainerComponent implements OnInit {
  todos$: Observable<TodoItem[]> | undefined
  constructor(
    private todoFactoryService: TodoFactoryService,
    private todoStoreService: TodoStoreService
  ) { }

  ngOnInit(): void {
    this.todos$ = this.todoStoreService.getTodos$();
  }

  addTodo(todoName: string) {
    if(this.todoStoreService.hasTodoName(todoName)) {
      return;
    }

    const newTodo = this.todoFactoryService.createTodo(todoName);

    this.todoStoreService.addTodo(newTodo);
  }

  clearAllTodos(): void {
      this.todoStoreService.clearCompleteTodos();
  }

}
