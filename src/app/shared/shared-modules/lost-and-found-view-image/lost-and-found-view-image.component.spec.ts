import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostAndFoundViewImageComponent } from './lost-and-found-view-image.component';

describe('LostAndFoundViewImageComponent', () => {
  let component: LostAndFoundViewImageComponent;
  let fixture: ComponentFixture<LostAndFoundViewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostAndFoundViewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundViewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
