import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ForumCommentBoxComponent} from './forum-comment-box.component';

describe('ForumCommentBoxComponent', () => {
  let component: ForumCommentBoxComponent;
  let fixture: ComponentFixture<ForumCommentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForumCommentBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCommentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
