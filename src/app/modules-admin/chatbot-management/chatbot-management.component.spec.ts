import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotManagementComponent } from './chatbot-management.component';

describe('ChatbotManagementComponent', () => {
  let component: ChatbotManagementComponent;
  let fixture: ComponentFixture<ChatbotManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
