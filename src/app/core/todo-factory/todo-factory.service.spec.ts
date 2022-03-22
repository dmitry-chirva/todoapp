import { TestBed } from '@angular/core/testing';

import { TodoFactoryService } from './todo-factory.service';

describe('TodoStoreService', () => {
  let service: TodoFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
