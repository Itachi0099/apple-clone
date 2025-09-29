import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

// ✅ Import the Ionic standalone components you are using
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonContent,
  IonFooter,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search, bagOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    RouterLink,
    IonApp,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonContent,
    IonFooter,
    IonIcon
  ],
})
export class AppComponent {
  constructor() {
    addIcons({ search, bagOutline });
  }
}
