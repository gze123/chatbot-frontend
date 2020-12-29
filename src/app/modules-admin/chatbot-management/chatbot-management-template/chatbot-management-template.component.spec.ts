import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotManagementTemplateComponent } from './chatbot-management-template.component';

describe('ChatbotManagementTemplateComponent', () => {
  let component: ChatbotManagementTemplateComponent;
  let fixture: ComponentFixture<ChatbotManagementTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotManagementTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotManagementTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
