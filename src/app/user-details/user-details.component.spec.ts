import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
class RouterStub {
  navigate(params){

  }
}
class ActivatedRouteStub{
//params: Observable<any> = Observable.empty();
private subject = new Subject();
push(value){
  this.subject.next(value);
}
get params(){
  return this.subject.asObservable();
}
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        {provide: Router, useClass:RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect the user to the users page after save',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');
    fixture.detectChanges();
    component.save();
    expect(spy).toHaveBeenCalledWith(['users']);
  });
  it('should navigate the user to the not found page when id is 0',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id:0});
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
