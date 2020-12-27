import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotUpdateIntentComponent } from './chatbot-update-intent.component';

describe('ChatbotUpdateIntentComponent', () => {
  let component: ChatbotUpdateIntentComponent;
  let fixture: ComponentFixture<ChatbotUpdateIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotUpdateIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotUpdateIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
