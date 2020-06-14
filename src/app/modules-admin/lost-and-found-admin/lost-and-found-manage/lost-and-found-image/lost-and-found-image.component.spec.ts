import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LostAndFoundImageComponent} from './lost-and-found-image.component';

describe('LostAndFoundImageComponent', () => {
  let component: LostAndFoundImageComponent;
  let fixture: ComponentFixture<LostAndFoundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LostAndFoundImageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
