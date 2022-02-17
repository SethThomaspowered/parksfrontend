import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksviewComponent } from './parksview.component';

describe('ParksviewComponent', () => {
  let component: ParksviewComponent;
  let fixture: ComponentFixture<ParksviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParksviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParksviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
