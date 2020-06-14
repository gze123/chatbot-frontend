import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsAndAnnouncementComponent} from './news-and-announcement.component';

describe('NewsAndAnnouncementComponent', () => {
  let component: NewsAndAnnouncementComponent;
  let fixture: ComponentFixture<NewsAndAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsAndAnnouncementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
