import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { BrightnessComponent } from '../components/brightness/brightness.component';

@Component({
  standalone: true,
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  imports: [IonContent, HeaderComponent, BrightnessComponent],
})
export class LedComponent {
  constructor() {}
}
