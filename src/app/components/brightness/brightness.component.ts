import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BluetoothSerialService } from 'src/app/services/bluetooth-serial.service';
import { IonItem, IonRange } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-brightness',
  templateUrl: './brightness.component.html',
  styleUrls: ['./brightness.component.scss'],
  imports: [CommonModule, FormsModule, IonItem, IonRange],
})
export class BrightnessComponent {
  public brightness: number = 80;
  public statusMessage: string = '';

  constructor(private bluetoothService: BluetoothSerialService) {}

  async setBrightness() {
    this.statusMessage = '';
    if (this.brightness >= 0 || this.brightness <= 255) {
      try {
        await this.bluetoothService.write(`<setBrightness#${this.brightness}>`);
      } catch (error) {
        this.statusMessage = 'Failed to set brightness';
      }
    } else {
      this.statusMessage = 'Brightness must be between 0 and 255';
    }
  }

  onBrightnessChange(event: any) {
    this.brightness = event.detail.value;
    this.setBrightness();
  }
}
