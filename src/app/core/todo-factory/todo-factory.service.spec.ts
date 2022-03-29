import { TodoFactoryService } from './todo-factory.service';
import { TodoItem } from '../../shared/interfaces/todo-item.interface';

describe('TodoFactoryService', () => {
  let service: TodoFactoryService;

  beforeEach(() => {
    service = new TodoFactoryService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create todo', () => {
    const newTodo = <TodoItem>{
      id: "",
      name: "Test",
      isCompleted: false
    };
    let expectedResult = null;

    expectedResult = service.createTodo(newTodo.name);

    expect(newTodo.id).not.toBe(expectedResult.id);
    expect(newTodo.name).toBe(expectedResult.name);
    expect(newTodo.isCompleted).toBe(expectedResult.isCompleted);
  });

  it('bla bla bla', () => {
    expect((<any>service).getTest()).toBe('This is test');
  });
});
