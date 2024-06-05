import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
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
    new Cv(2, 'sautreau', 'alban', 20, '12345', 'dev', '     '),
    new Cv(
      3,
      'kaakati',
      'dania',
      20,
      '12347',
      'dev',
      'rotating_card_profile.png'
    ),
    new Cv(4, 'sellaouti', 'aymen', 41, '12347', 'dev', ''),
  ];
  constructor(
    private loggerService: LoggerService,
    private sayHello: SayHelloService
  ) {
    this.sayHello.hello();
    this.loggerService.logger('cc je suis le cvComponent');
  }
  getSelected(cv: Cv) {
    this.selectedCv = cv;
  }
}
