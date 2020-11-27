import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndAnnouncementViewComponent } from './news-and-announcement-view.component';

describe('NewsAndAnnouncementViewComponent', () => {
  let component: NewsAndAnnouncementViewComponent;
  let fixture: ComponentFixture<NewsAndAnnouncementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndAnnouncementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndAnnouncementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
