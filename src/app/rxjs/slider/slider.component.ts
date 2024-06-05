import { Component, Input } from '@angular/core';
import { Observable, map, startWith, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input()
  size = 100;
  @Input()
  intervalTimer = 1000;
  @Input()
  paths = [
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  paths$ = timer(0, 1000)
    // 0 1 2 3 4 5 6 7 8 9 10 11
    .pipe(
      map((index) => this.paths[index % this.paths.length]),
      // img1 img2 img3 img4 ...
      startWith(this.paths[this.paths.length - 1])
    );
  //   new Observable((observer) => {
  //   let index = 0;
  //   setInterval(() => {
  //     observer.next(this.paths[index % this.paths.length]);
  //     index++;
  //   }, this.intervalTimer);
  // });
}
