import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditXoferComponent } from './edit-xofer.component';

describe('EditXoferComponent', () => {
  let component: EditXoferComponent;
  let fixture: ComponentFixture<EditXoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditXoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditXoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
