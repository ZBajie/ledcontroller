import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle],
})
export class HeaderComponent {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.title = data['title'];
    });
  }
}
