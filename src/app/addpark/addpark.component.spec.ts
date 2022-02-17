import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparkComponent } from './addpark.component';

describe('AddparkComponent', () => {
  let component: AddparkComponent;
  let fixture: ComponentFixture<AddparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddparkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
