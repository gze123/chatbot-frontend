import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumManageComponent } from './forum-manage.component';

describe('ForumManageComponent', () => {
  let component: ForumManageComponent;
  let fixture: ComponentFixture<ForumManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
