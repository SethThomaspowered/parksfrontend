import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesviewComponent } from './featuresview.component';

describe('FeaturesviewComponent', () => {
  let component: FeaturesviewComponent;
  let fixture: ComponentFixture<FeaturesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
