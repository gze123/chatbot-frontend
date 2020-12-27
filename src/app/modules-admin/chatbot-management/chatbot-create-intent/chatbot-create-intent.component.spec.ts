import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotCreateIntentComponent } from './chatbot-create-intent.component';

describe('ChatbotCreateIntentComponent', () => {
  let component: ChatbotCreateIntentComponent;
  let fixture: ComponentFixture<ChatbotCreateIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotCreateIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotCreateIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
