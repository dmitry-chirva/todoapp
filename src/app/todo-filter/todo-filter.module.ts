import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFilterComponent } from './todo-filter.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        TodoFilterComponent
    ],
    exports: [
        TodoFilterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class TodoFilterModule { }
