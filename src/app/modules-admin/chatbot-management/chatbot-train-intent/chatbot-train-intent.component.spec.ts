import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotTrainIntentComponent } from './chatbot-train-intent.component';

describe('ChatbotTrainIntentComponent', () => {
  let component: ChatbotTrainIntentComponent;
  let fixture: ComponentFixture<ChatbotTrainIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotTrainIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotTrainIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
