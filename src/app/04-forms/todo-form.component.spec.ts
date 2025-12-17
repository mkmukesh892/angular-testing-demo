import {TodoFormComponent} from './todo-form.component';
import { UntypedFormBuilder } from '@angular/forms';
describe('TodoFormComponent',()=>{
   var component: TodoFormComponent;
   beforeEach(()=>{
       component = new TodoFormComponent(new UntypedFormBuilder());
   });
   it('should create a form with 2 controls',()=>{
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
   });
   
   it('should make the name field required',()=>{
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
   });

})