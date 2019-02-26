import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
beforeEach(()=>{
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
})
  it('should create the app', () => {
  
    expect(component).toBeTruthy();
  });

  it(`should have as title 'demo-testing'`, () => {
  
    expect(component.title).toEqual('demo-testing');
  });
  it('should have router-outlet tag',()=>{
   let de = fixture.debugElement.query(By.directive(RouterOutlet));
   expect(de).not.toBeNull();
  });
  it('should have a link to todos page',()=>{
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.properties['href']==='/todos');
    expect(index).toBeGreaterThan(-1);
  })
});
