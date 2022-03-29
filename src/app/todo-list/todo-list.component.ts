import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../shared/interfaces/todo-item.interface';
import { TodoStoreService } from '../core/todo-store/todo-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoItem[]> | undefined;
  isAllCompleted$: Observable<boolean> | undefined;

  private statusFilter = "";

  constructor(
    private todoStoreService: TodoStoreService,
    private route: ActivatedRoute
  ) {
    this.statusFilter = this.route.snapshot.data['status']
  }

  ngOnInit(): void {
    this.todos$ = this.todoStoreService.getFiltered$(this.statusFilter);
    this.isAllCompleted$ = this.todoStoreService.isAllCompleted$();
  }

  toggleAllComplete(isCompleted: boolean): void {
    const todos = this.todoStoreService.getTodos().map(item => ({ ...item, isCompleted }));

    this.todoStoreService.setTodos(todos);
  }

  updateTodo(todoItem: TodoItem) {
    this.todoStoreService.updateTodo(todoItem);
  }

  removeTodo(id: string) {
    this.todoStoreService.removeTodoById(id);
  }

}
