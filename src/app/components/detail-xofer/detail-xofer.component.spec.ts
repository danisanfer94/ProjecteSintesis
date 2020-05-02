import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailXoferComponent } from './detail-xofer.component';

describe('DetailXoferComponent', () => {
  let component: DetailXoferComponent;
  let fixture: ComponentFixture<DetailXoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailXoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailXoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
