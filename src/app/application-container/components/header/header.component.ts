import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'todoapp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild("newTodoField") newTodoField: ElementRef | undefined;
  @Output() onAddTodo: EventEmitter<string> = new EventEmitter<string>();

  todoName: string = "";

  addTodo(): void {
    if(this.newTodoField) {
      this.newTodoField.nativeElement.value = "";
    }

    this.onAddTodo.emit(this.todoName);
  }

}
