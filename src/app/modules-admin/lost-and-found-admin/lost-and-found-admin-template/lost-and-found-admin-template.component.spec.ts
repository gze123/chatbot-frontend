import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostAndFoundAdminTemplateComponent } from './lost-and-found-admin-template.component';

describe('LostAndFoundAdminTemplateComponent', () => {
  let component: LostAndFoundAdminTemplateComponent;
  let fixture: ComponentFixture<LostAndFoundAdminTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostAndFoundAdminTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundAdminTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
