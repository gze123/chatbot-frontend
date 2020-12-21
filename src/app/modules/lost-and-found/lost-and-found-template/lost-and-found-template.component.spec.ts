import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostAndFoundTemplateComponent } from './lost-and-found-template.component';

describe('LostAndFoundTemplateComponent', () => {
  let component: LostAndFoundTemplateComponent;
  let fixture: ComponentFixture<LostAndFoundTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostAndFoundTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
