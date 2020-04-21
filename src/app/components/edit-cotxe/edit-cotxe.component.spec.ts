import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCotxeComponent } from './edit-cotxe.component';

describe('EditCotxeComponent', () => {
  let component: EditCotxeComponent;
  let fixture: ComponentFixture<EditCotxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCotxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCotxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
