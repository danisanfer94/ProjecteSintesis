import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViatgeDetailsComponent } from './viatge-details.component';

describe('ViatgeDetailsComponent', () => {
  let component: ViatgeDetailsComponent;
  let fixture: ComponentFixture<ViatgeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViatgeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViatgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
