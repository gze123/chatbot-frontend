import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostAndFoundUpdateComponent } from './lost-and-found-update.component';

describe('LostAndFoundUpdateComponent', () => {
  let component: LostAndFoundUpdateComponent;
  let fixture: ComponentFixture<LostAndFoundUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostAndFoundUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
