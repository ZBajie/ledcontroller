import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { BluetoothSerialService } from 'src/app/services/bluetooth-serial.service';

@Component({
  standalone: true,
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss'],
  imports: [CommonModule, ColorPickerModule],
})
export class ColorpickerComponent {
  public color: string = 'rgb(255, 0, 0)';
  public rgbColor: string = '255, 0, 0';
  public statusMessage: string = '';

  constructor(private bluetoothService: BluetoothSerialService) {}

  onColorChange() {
    this.statusMessage = '';
    this.rgbColor = this.color.replace(/[^\d,]/g, '').trim(); // chatgpt
    this.setColor();
  }

  async setColor() {
    try {
      await this.bluetoothService.write(`<setLedColorAll#${this.rgbColor}>`);
      this.statusMessage = 'Color set successfully!';
    } catch (e) {
      this.statusMessage = 'Failed to set color';
    }
  }
}
