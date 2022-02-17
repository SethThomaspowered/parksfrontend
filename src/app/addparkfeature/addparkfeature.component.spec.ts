import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparkfeatureComponent } from './addparkfeature.component';

describe('AddparkfeatureComponent', () => {
  let component: AddparkfeatureComponent;
  let fixture: ComponentFixture<AddparkfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddparkfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddparkfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
