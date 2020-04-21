import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateXoferComponent } from './create-xofer.component';

describe('CreateXoferComponent', () => {
  let component: CreateXoferComponent;
  let fixture: ComponentFixture<CreateXoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateXoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateXoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
