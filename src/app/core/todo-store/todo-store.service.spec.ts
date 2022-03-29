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
      name: 'Test2',
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

  it('should get todos as observable', () => {
    // Act
    const expectResult = <TodoItem[]>[];

    // Assert
    // Arrange
    service.getTodos$()
      .subscribe(todos => {
        expect(todos).toEqual(expectResult)
      })
  });

  it('should set todos', () => {
    // Act
    const expectResult = <TodoItem[]>[...todos];

    // Assert
    service.setTodos(todos);

    // Arrange
    service.getTodos$()
      .subscribe(todos => {
        expect(todos).toEqual(expectResult)
      })
  });

  it('should get todos as array', () => {
    // Act
    const expectResult = <TodoItem[]>[...todos];

    // Assert
    service.setTodos(todos);

    // Arrange
    expect(service.getTodos()).toEqual(expectResult)
  });

  it('should get todos as array', () => {
    // Act
    const expectResult = <TodoItem[]>[...todos];

    // Assert
    service.setTodos(todos);

    // Arrange
    expect(service.getTodos()).toEqual(expectResult)
  });

  describe('getFiltered$', () => {
    it('should get all todos', () => {
      // Act
      const expectResult = <TodoItem[]>[...todos];
      const statusAll = '';
      service.setTodos(todos);

      // Assert
      // Arrange
      service.getFiltered$(statusAll)
        .subscribe(todos => {
          expect(todos).toEqual(expectResult)
        })
    })

    it('should get active todos', () => {
      // Act
      const expectResult = <TodoItem[]>[...todos].filter(todo => !todo.isCompleted);
      const statusActive = 'active';
      service.setTodos(todos);

      // Assert
      // Arrange
      service.getFiltered$(statusActive)
        .subscribe(todos => {
          expect(todos).toEqual(expectResult)
        })
    })

    it('should get completed todos', () => {
      // Act
      const expectResult = <TodoItem[]>[...todos].filter(todo => todo.isCompleted);
      const statusCompleted = 'completed';
      service.setTodos(todos);

      // Assert
      // Arrange
      service.getFiltered$(statusCompleted)
        .subscribe(todos => {
          expect(todos).toEqual(expectResult)
        })
    })
  });

  describe('isAllCompleted$', () => {
    it('should get false when it least one of todos are not completed', () => {
      // Act
      service.setTodos(todos);

      // Assert
      // Arrange
      service.isAllCompleted$()
        .subscribe(isCompleted => {
          expect(isCompleted).toBeFalse()
        })
    })

    it('should get true when it all todos are completed', () => {
      // Act
      const newTodos = <TodoItem[]>[...todos].map(todo => ({...todo, isCompleted: true}));
      service.setTodos(newTodos);

      // Assert
      // Arrange
      service.isAllCompleted$()
        .subscribe(isCompleted => {
          expect(isCompleted).toBeTruthy()
        })
    })
  });
});
