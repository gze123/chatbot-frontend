import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostManageComponent } from './lost-manage.component';

describe('LostManageComponent', () => {
  let component: LostManageComponent;
  let fixture: ComponentFixture<LostManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
