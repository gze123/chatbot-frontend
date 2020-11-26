import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnnouncementManageComponent } from './news-announcement-manage.component';

describe('NewAnnouncementManageComponent', () => {
  let component: NewAnnouncementManageComponent;
  let fixture: ComponentFixture<NewAnnouncementManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnnouncementManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnnouncementManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
