import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LostAndFoundManageComponent} from './lost-and-found-manage.component';

describe('LostAndFoundManageComponent', () => {
  let component: LostAndFoundManageComponent;
  let fixture: ComponentFixture<LostAndFoundManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LostAndFoundManageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
