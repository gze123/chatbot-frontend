import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LostAndFoundAdminComponent} from './lost-and-found-admin.component';

describe('LostAndFoundAdminComponent', () => {
  let component: LostAndFoundAdminComponent;
  let fixture: ComponentFixture<LostAndFoundAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LostAndFoundAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
