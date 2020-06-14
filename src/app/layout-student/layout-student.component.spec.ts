import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutStudentComponent} from './layout-student.component';

describe('LayoutStudentComponent', () => {
  let component: LayoutStudentComponent;
  let fixture: ComponentFixture<LayoutStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutStudentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
