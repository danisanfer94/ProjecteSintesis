import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViatgesClientComponent } from './viatges-client.component';

describe('ViatgeClientComponent', () => {
  let component: ViatgesClientComponent;
  let fixture: ComponentFixture<ViatgesClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViatgesClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViatgesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
