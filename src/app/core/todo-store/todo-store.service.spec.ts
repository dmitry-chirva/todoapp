import { TestBed } from '@angular/core/testing';

import { TodoStoreService } from './todo-store.service';
import { TodoItem } from '../../shared/interfaces/todo-item.interface';

describe('TodoStoreService', () => {
  let service: TodoStoreService;
  const todos = <TodoItem[]> [
    {
      id: '1',
      name: 'Test',
      isCompleted: false
    },
    {
      id: '2',
      name: 'Tes2',
      isCompleted: false
    },
    {
      id: '3',
      name: 'Test3',
      isCompleted: true
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get todos', () => {
    const expectResult = <TodoItem[]>[];

    service.getTodos$()
      .subscribe(todos => {
        expect(todos).toEqual(expectResult);
      });
  });

  it('should get todos as observable', () => {
    const expectResult = <TodoItem[]>[];

    service.getTodos$()
      .subscribe(todos => {
        expect(todos).toEqual(expectResult);
      });
  });

  it('should set todos', () => {
    const expectResult = <TodoItem[]>[...todos];

    service.setTodos(expectResult);

    service.getTodos$()
      .subscribe(todos => {
        expect(todos).toEqual(expectResult);
      });
  });

  it('should get todos', () => {
    const expectResult = <TodoItem[]>[...todos];

    service.setTodos(expectResult);

    expect(service.getTodos()).toEqual(expectResult)
  });

  describe('isAllCompleted$', () => {
    it('should get false when it least one of todos no complete', () => {
      const expectResult = <TodoItem[]>[...todos];
      service.setTodos(expectResult);

      service.isAllCompleted$()
        .subscribe(isComplete => {
          expect(isComplete).toBeFalse();
        })
    });

    it('should get true when all test complete', () => {
      const expectResult = <TodoItem[]>todos.map((todo) => ({ ...todo, isCompleted: true }));
      service.setTodos(expectResult);

      service.isAllCompleted$()
        .subscribe(isComplete => {
          console.log(isComplete)
        })

      expect(service.getTodos()).toEqual(expectResult)
    });
  });

  describe('getFiltered$', () => {
    it('should get all todo', () => {
      const expectResult = <TodoItem[]>[...todos];
      const statusAll = '';
      service.setTodos(expectResult);

      service.getFiltered$(statusAll)
        .subscribe(todos => {
          expect(todos).toEqual(expectResult);
        })
    });

    it('should get only active todo', () => {
      const expectResult = <TodoItem[]>[...todos].filter(todo => !todo.isCompleted);
      const statusAll = 'active';
      service.setTodos(expectResult);

      service.getFiltered$(statusAll)
        .subscribe(todos => {
          expect(todos).toEqual(expectResult);
        })
    });

    it('should get completed todo', () => {
      const expectResult = <TodoItem[]>[...todos].filter(todo => todo.isCompleted);
      const statusAll = 'completed';
      service.setTodos(expectResult);

      service.getFiltered$(statusAll)
        .subscribe(todos => {
          expect(todos).toEqual(expectResult);
        })
    });
  });
});
