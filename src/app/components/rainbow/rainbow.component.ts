import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton } from '@ionic/angular/standalone';
import { BluetoothSerialService } from 'src/app/services/bluetooth-serial.service';

@Component({
  selector: 'app-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrls: ['./rainbow.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton],
})
export class RainbowComponent {
  public statusMessage: string = '';
  constructor(private bluetoothService: BluetoothSerialService) {}

  async setRainbow() {
    this.statusMessage = '';
    try {
      await this.bluetoothService.write(`<setRainbowEffect>`);
    } catch (error) {
      this.statusMessage = 'Failed to set rainbow';
    }
  }
}
