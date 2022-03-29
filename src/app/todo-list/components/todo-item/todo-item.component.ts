import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../../shared/interfaces/todo-item.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodoItem | undefined;

  @Output() onChange: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  todoForm: FormGroup | undefined;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      completeField: this.todoItem?.isCompleted,
      editNameField: this.todoItem?.name
    })
  }

  handleChangeTodo(): void {
    const { completeField, editNameField } = this.todoForm?.getRawValue();
    const changedTodo = <TodoItem> {
      name: editNameField,
      isCompleted: completeField
    }

    this.onChange.emit({
      ...this.todoItem,
      ...changedTodo
    });

    this.disableEditMode();
  }

  enableEditMode(editField: HTMLInputElement): void {
    this.isEditing = true;

    setTimeout(() => {
      editField.focus();
    }, 0);
  }

  disableEditMode(): void {
    this.isEditing = false;
  }

  removeTodo(): void {
    this.onRemove.emit(this.todoItem?.id);
  }
}
