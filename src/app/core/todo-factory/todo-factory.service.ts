import { Injectable } from '@angular/core';
import { TodoItem } from '../../shared/interfaces/todo-item.interface';
import { StringUtils } from '../../shared/utils/string.utils';

@Injectable({
  providedIn: 'root'
})
export class TodoFactoryService {
  createTodo(name: string): TodoItem {
    const id = StringUtils.generateUID();
    const isCompleted = false;

    return <TodoItem> {
      id,
      name,
      isCompleted
    }
  }

  private getTest(): string {
    return 'This is test';
  }
}
