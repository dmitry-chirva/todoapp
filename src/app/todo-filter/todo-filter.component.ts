import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todoapp-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent {
  @Input() todoLength: number | undefined  = 0;
  @Output() onClearAllTodos: EventEmitter<void> = new EventEmitter<void>();

  handleClearAllTodos(): void {
    this.onClearAllTodos.emit();
  }
}
