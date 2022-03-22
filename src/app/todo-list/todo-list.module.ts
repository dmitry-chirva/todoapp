import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TodoListModule { }
