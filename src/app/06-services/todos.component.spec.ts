import {TodosService} from './todos.service';
import {TodosComponent} from './todos.component';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
describe('TodosComponent',()=>{
  let  component: TodosComponent;
   let service: TodosService;
    beforeEach(()=>{
        service = new TodosService(null);
        component = new TodosComponent(service);
    });
    it('should fetch todos from api and set to todos property',()=>{
        let todos = [1,2,4];
        spyOn(service,'getTodos').and.callFake(()=>{
            return Observable.from([todos]);
        });
        component.ngOnInit();
        expect(component.todos.length).toBeGreaterThan(0);
    });
    it('should call the server to send todo to server',()=>{
        let spy = spyOn(service,"add").and.callFake(()=>{
            return Observable.empty();
        });
        component.add();
        expect(spy).toHaveBeenCalled();
    });
    it('should add the new todo returned from the server',()=>{
        let todo ={id:1};
        let spy = spyOn(service,"add").and.returnValue(Observable.from([todo]));
        component.add();
       expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    });
    it('should set message property if server returns an error when adding a new todo',()=>{
        let error ='error occured during add called';
        let spy = spyOn(service,"add").and.returnValue(Observable.throw(error));
        component.add();
       expect(component.message).toBe(error);
    });
    it('should call the server to delete todo if user confirms',()=>{
        spyOn(window,'confirm').and.returnValue(true);
        let spy = spyOn(service,"delete").and.returnValue(Observable.empty());
        component.delete(1);
       expect(spy).toHaveBeenCalledWith(1);
    });
    it('should NOT call the server to delete todo if user not confirms',()=>{
       spyOn(window,'confirm').and.returnValue(false);
        let spy = spyOn(service,"delete").and.returnValue(Observable.empty());
        component.delete(1);
       expect(spy).not.toHaveBeenCalled();
    });
});