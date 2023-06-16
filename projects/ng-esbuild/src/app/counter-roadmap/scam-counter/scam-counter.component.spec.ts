import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScamCounterComponent } from './scam-counter.component';

describe('ScamCounterComponent', () => {
  let component: ScamCounterComponent;
  let fixture: ComponentFixture<ScamCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScamCounterComponent]
    });
    fixture = TestBed.createComponent(ScamCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
