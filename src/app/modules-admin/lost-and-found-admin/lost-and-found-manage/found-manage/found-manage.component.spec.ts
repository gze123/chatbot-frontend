import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundManageComponent } from './found-manage.component';

describe('FoundManageComponent', () => {
  let component: FoundManageComponent;
  let fixture: ComponentFixture<FoundManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
