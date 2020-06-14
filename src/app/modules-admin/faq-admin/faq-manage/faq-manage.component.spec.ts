import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FaqManageComponent} from './faq-manage.component';

describe('FaqManageComponent', () => {
  let component: FaqManageComponent;
  let fixture: ComponentFixture<FaqManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaqManageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
