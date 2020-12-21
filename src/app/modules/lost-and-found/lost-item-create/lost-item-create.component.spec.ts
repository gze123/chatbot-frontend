import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostItemCreateComponent } from './lost-item-create.component';

describe('LostItemCreateComponent', () => {
  let component: LostItemCreateComponent;
  let fixture: ComponentFixture<LostItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
