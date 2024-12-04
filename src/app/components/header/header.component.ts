import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { BluetoothSerialService } from 'src/app/services/bluetooth-serial.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, CommonModule],
})
export class HeaderComponent implements OnInit {
  public title: string = '';
  public connected: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private bluetoothService: BluetoothSerialService
  ) {
    this.route.data.subscribe((data) => {
      this.title = data['title'];
    });
  }

  ngOnInit() {
    this.bluetoothService.connected$.subscribe((connected) => {
      this.connected = connected;
    });
  }
}
