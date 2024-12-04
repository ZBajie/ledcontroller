import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

declare var bluetoothSerial: any; // Cordova plugin object

@Injectable({
  providedIn: 'root',
})
export class BluetoothSerialService {
  constructor(private platform: Platform) {}

  private ensureReady(): Promise<void | string> {
    return this.platform.ready();
  }

  isBluetoothEnabled(): Promise<boolean> {
    return this.ensureReady().then(
      () =>
        new Promise<boolean>((resolve, reject) => {
          bluetoothSerial.isEnabled(
            () => resolve(true),
            (error: any) => reject(error)
          );
        })
    );
  }

  listDevices(): Promise<any[]> {
    return this.ensureReady().then(
      () =>
        new Promise<any[]>((resolve, reject) => {
          bluetoothSerial.list(
            (devices: any[]) => resolve(devices),
            (error: any) => reject(error)
          );
        })
    );
  }

  connect(address: string): Promise<void> {
    return this.ensureReady().then(
      () =>
        new Promise<void>((resolve, reject) => {
          bluetoothSerial.connect(
            address,
            () => resolve(),
            (error: any) => reject(error)
          );
        })
    );
  }

  write(data: string): Promise<void> {
    return this.ensureReady().then(
      () =>
        new Promise<void>((resolve, reject) => {
          bluetoothSerial.write(
            data,
            () => resolve(),
            (error: any) => reject(error)
          );
        })
    );
  }

  read(): Promise<string> {
    return this.ensureReady().then(() => {
      return new Promise<string>((resolve, reject) => {
        bluetoothSerial.read(
          (data: string) => resolve(data),
          (error: any) => reject(error)
        );
      });
    });
  }

  disconnect(): Promise<void> {
    return this.ensureReady().then(
      () =>
        new Promise<void>((resolve, reject) => {
          bluetoothSerial.disconnect(
            () => resolve(),
            (error: any) => reject(error)
          );
        })
    );
  }
}
