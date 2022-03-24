import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MockProvider } from 'ngx-mock-provider';
import { ActivatedRoute } from '@angular/router';
import { TodoStoreService } from '../core/todo-store/todo-store.service';
import { Observable, of } from 'rxjs';
import { TodoItem } from '../shared/interfaces/todo-item.interface';

xdescribe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [
        MockProvider({
          provider: TodoStoreService,
          overwrite: {
            get getFiltered$(): Observable<TodoItem[]> {
              return of([])
            }
          }
        }),
        MockProvider({
          provider: ActivatedRoute,
          overwrite: {
            snapshot: {
              queryParams: {
                ['data']: {
                  ['status']: ''
                }
              }
            }
          }
        })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
