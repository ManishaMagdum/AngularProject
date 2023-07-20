import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBindingComponent } from './assign-binding.component';

describe('AssignBindingComponent', () => {
  let component: AssignBindingComponent;
  let fixture: ComponentFixture<AssignBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
