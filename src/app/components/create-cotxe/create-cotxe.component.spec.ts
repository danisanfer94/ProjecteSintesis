import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCotxeComponent } from './create-cotxe.component';

describe('CreateCotxeComponent', () => {
  let component: CreateCotxeComponent;
  let fixture: ComponentFixture<CreateCotxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCotxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCotxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
