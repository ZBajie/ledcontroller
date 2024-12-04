import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonItem, IonList } from '@ionic/angular/standalone';
import { BluetoothSerialService } from '../services/bluetooth-serial.service';
import { HeaderComponent } from '../components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.scss'],
  imports: [
    HeaderComponent,
    IonContent,
    IonList,
    IonItem,
    IonButton,
    CommonModule,
    FormsModule,
  ],
})
export class BluetoothComponent {
  public connected$ = this.bluetoothService.connected$;
  public devices: any[] = [];
  public statusMessage: string = '';
  public deviceName: string = '';

  constructor(private bluetoothService: BluetoothSerialService) {}

  async enableBluetooth() {
    try {
      await this.bluetoothService.isBluetoothEnabled();
      this.statusMessage = 'Bluetooth is enabled!';
      this.scanDevices();
    } catch {
      this.statusMessage = 'Bluetooth is not enabled!';
    }
  }

  async scanDevices() {
    try {
      this.devices = await this.bluetoothService.listDevices();
      this.statusMessage = `${this.devices.length} devices found.`;
    } catch (error) {
      this.statusMessage = 'Failed to list devices.';
      console.error(error);
    }
  }

  async connect(address: string, deviceName: string) {
    try {
      await this.bluetoothService.connect(address);
      this.deviceName = deviceName;
      this.statusMessage = 'Connected to device!';
    } catch (error) {
      this.statusMessage = 'Failed to connect.';
      console.error(error);
    }
  }

  async disconnect() {
    try {
      await this.bluetoothService.disconnect();
      this.statusMessage = 'Disconnected.';
    } catch (error) {
      this.statusMessage = 'Failed to disconnect.';
      console.error(error);
    }
  }
}
