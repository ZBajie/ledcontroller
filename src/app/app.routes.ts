import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomePage } from './home/home.page';
import { TabsComponent } from './tabs/tabs.component';
import { LedComponent } from './led/led.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'led',
        component: LedComponent,
      },
    ],
  },
];

export const appRouterProviders = [provideRouter(routes)];
