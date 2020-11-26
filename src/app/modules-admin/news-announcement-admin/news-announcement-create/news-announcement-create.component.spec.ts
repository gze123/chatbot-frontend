import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAnnouncementCreateComponent } from './news-announcement-create.component';

describe('NewsAnnouncementCreateComponent', () => {
  let component: NewsAnnouncementCreateComponent;
  let fixture: ComponentFixture<NewsAnnouncementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAnnouncementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAnnouncementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
