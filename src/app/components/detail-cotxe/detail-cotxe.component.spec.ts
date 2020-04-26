import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCotxeComponent } from './detail-cotxe.component';

describe('DetailCotxeComponent', () => {
  let component: DetailCotxeComponent;
  let fixture: ComponentFixture<DetailCotxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCotxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCotxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
