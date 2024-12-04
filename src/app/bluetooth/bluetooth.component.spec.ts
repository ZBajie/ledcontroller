import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BluetoothComponent } from './bluetooth.component';

describe('BluetoothComponent', () => {
  let component: BluetoothComponent;
  let fixture: ComponentFixture<BluetoothComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BluetoothComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BluetoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
