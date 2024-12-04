import { Component } from '@angular/core';

import { HeaderComponent } from '../components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.scss'],
  imports: [HeaderComponent, IonContent],
})
export class BluetoothComponent {
  constructor() {}
}
