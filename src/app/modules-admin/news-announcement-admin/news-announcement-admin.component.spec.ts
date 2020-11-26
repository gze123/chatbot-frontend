import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAnnouncementAdminComponent } from './news-announcement-admin.component';

describe('NewsAnnouncementAdminComponent', () => {
  let component: NewsAnnouncementAdminComponent;
  let fixture: ComponentFixture<NewsAnnouncementAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAnnouncementAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAnnouncementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
