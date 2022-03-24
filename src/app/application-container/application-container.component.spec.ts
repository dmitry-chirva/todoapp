import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationContainerComponent } from './application-container.component';
import { MockProvider } from 'ngx-mock-provider';
import { TodoStoreService } from '../core/todo-store/todo-store.service';
import { Observable, of } from 'rxjs';
import { TodoItem } from '../shared/interfaces/todo-item.interface';

describe('ApplicationContainerComponent', () => {
  let component: ApplicationContainerComponent;
  let fixture: ComponentFixture<ApplicationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationContainerComponent ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
