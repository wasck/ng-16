import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneCounterComponent } from './standalone-counter.component';

describe('StandaloneCounterComponent', () => {
  let component: StandaloneCounterComponent;
  let fixture: ComponentFixture<StandaloneCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandaloneCounterComponent]
    });
    fixture = TestBed.createComponent(StandaloneCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
