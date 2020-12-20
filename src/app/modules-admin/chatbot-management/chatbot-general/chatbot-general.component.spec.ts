import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotGeneralComponent } from './chatbot-general.component';

describe('ChatbotGeneralComponent', () => {
  let component: ChatbotGeneralComponent;
  let fixture: ComponentFixture<ChatbotGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
