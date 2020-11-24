import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleManagementManageComponent } from './role-management-manage.component';

describe('RoleManagementManageComponent', () => {
  let component: RoleManagementManageComponent;
  let fixture: ComponentFixture<RoleManagementManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleManagementManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleManagementManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
