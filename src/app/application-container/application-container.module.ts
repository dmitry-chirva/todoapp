import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationContainerComponent } from './application-container.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListModule } from '../todo-list/todo-list.module';
import { TodoFilterModule } from '../todo-filter/todo-filter.module';
import { ApplicationContainerRoutingModule } from './application-container-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApplicationContainerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoListModule,
    TodoFilterModule,
    ApplicationContainerRoutingModule
  ]
})
export class ApplicationContainerModule { }
