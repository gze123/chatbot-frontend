import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LostAndFoundCreateComponent} from './lost-and-found-create.component';

describe('LostAndFoundCreateComponent', () => {
  let component: LostAndFoundCreateComponent;
  let fixture: ComponentFixture<LostAndFoundCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LostAndFoundCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
