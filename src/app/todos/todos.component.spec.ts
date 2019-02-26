import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import {TodoService} from './todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let service: TodoService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load todos from the server',()=>{
    spyOn(service,'getTodos').and.returnValue(Observable.from([[1,2,3]]));
    fixture.detectChanges();
    expect(component.todos.length).toBe(3);
  })
  it('should load todos Promise from the server',fakeAsync(()=>{
    spyOn(service,'getTodosPromise').and.returnValue(Promise.resolve([1,2,3]));
    fixture.detectChanges();
    tick();
    expect(component.todosPromise.length).toBe(3);
  }));
});
