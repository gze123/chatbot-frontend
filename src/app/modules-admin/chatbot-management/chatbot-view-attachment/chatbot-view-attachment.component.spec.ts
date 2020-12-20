import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotViewAttachmentComponent } from './chatbot-view-attachment.component';

describe('ChatbotViewAttachmentComponent', () => {
  let component: ChatbotViewAttachmentComponent;
  let fixture: ComponentFixture<ChatbotViewAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotViewAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotViewAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
