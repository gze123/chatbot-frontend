import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnnouncementViewComponent } from './new-announcement-view.component';

describe('NewAnnouncementViewComponent', () => {
  let component: NewAnnouncementViewComponent;
  let fixture: ComponentFixture<NewAnnouncementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnnouncementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnnouncementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
