import { Component } from '@angular/core';
import { IonContent, IonImg } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonContent, HeaderComponent],
})
export class HomePage {
  constructor() {}
}
