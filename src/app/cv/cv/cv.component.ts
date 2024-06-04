import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  /**
   * la liste des cvs à gérer
   */
  cvs = [
    new Cv(
      1,
      'vaillant',
      'cedric',
      20,
      '1234',
      'dev',
      'rotating_card_profile2.png'
    ),
    new Cv(
      2,
      'sautreau',
      'alban',
      20,
      '12345',
      'dev',
      'rotating_card_profile3.png'
    ),
    new Cv(
      3,
      'kaakati',
      'dania',
      20,
      '12347',
      'dev',
      'rotating_card_profile.png'
    ),
  ];

  getSelected(cv: Cv) {
    this.selectedCv = cv;
  }
}
