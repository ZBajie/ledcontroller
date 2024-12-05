import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrightnessComponent } from './brightness.component';

describe('BrightnessComponent', () => {
  let component: BrightnessComponent;
  let fixture: ComponentFixture<BrightnessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrightnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrightnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
