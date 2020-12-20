import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotLostAndFoundComponent } from './chatbot-lost-and-found.component';

describe('ChatbotLostAndFoundComponent', () => {
  let component: ChatbotLostAndFoundComponent;
  let fixture: ComponentFixture<ChatbotLostAndFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotLostAndFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotLostAndFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
