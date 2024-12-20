import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { BrightnessComponent } from '../components/brightness/brightness.component';
import { ColorpickerComponent } from '../components/colorpicker/colorpicker.component';
import { RainbowComponent } from '../components/rainbow/rainbow.component';

@Component({
  standalone: true,
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  imports: [
    IonContent,
    HeaderComponent,
    BrightnessComponent,
    ColorpickerComponent,
    RainbowComponent,
  ],
})
export class LedComponent {
  constructor() {}
}
