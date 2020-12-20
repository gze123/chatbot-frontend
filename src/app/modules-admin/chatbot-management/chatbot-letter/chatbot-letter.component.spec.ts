import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotLetterComponent } from './chatbot-letter.component';

describe('ChatbotLetterComponent', () => {
  let component: ChatbotLetterComponent;
  let fixture: ComponentFixture<ChatbotLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
