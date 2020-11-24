import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementManageComponent } from './user-management-manage.component';

describe('UserManagementManageComponent', () => {
  let component: UserManagementManageComponent;
  let fixture: ComponentFixture<UserManagementManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
