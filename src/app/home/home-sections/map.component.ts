import { Component } from '@angular/core';
import { MESSAGES } from '../../../messages';

interface InfoConfig {
  icon: string;
  message: string;
}

@Component({
  selector: 'app-map',
  template: `
    <div class="map">
      <app-avatar class="map-avatar" [icon]="mapIcon"></app-avatar>
      <div class="map-title">{{ msg.title }}</div>
      <h2 class="map-subtitle">{{ msg.subtitle }}</h2>
      <img class="map-image" src="/assets/mapa.png" alt="Mapa" />
      <div class="map-info">
        <div *ngFor="let info of infoConfig" class="info">
          <app-avatar class="info-avatar" [icon]="info.icon"></app-avatar>
          <h3>{{ info.message }}</h3>
        </div>
      </div>
      <button mat-button class="map-button" (click)="onClick()">
        {{ msg.bookPrivateClass }}
      </button>
    </div>
  `,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  msg = {
    title: MESSAGES['map.title'],
    subtitle: MESSAGES['map.subtitle'],
    experiencedTutors: MESSAGES['map.experiencedTutors'],
    learnAtYourPace: MESSAGES['map.learnAtYourPace'],
    affordablePrice: MESSAGES['map.affordablePrice'],
    bookPrivateClass: MESSAGES['map.bookPrivateClass'],
  };

  mapIcon = 'publicon';

  infoConfig: InfoConfig[] = [
    { icon: 'verified_user', message: this.msg.experiencedTutors },
    { icon: 'watch_later', message: this.msg.learnAtYourPace },
    { icon: 'thumb_up', message: this.msg.affordablePrice },
  ];

  onClick(): void {
    console.log('button clicked');
  }
}
