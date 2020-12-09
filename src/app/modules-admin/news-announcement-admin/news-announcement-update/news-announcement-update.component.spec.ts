import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAnnouncementUpdateComponent } from './news-announcement-update.component';

describe('NewsAnnouncementUpdateComponent', () => {
  let component: NewsAnnouncementUpdateComponent;
  let fixture: ComponentFixture<NewsAnnouncementUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAnnouncementUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAnnouncementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
