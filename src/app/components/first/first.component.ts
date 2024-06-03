import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  message = 'init value';
  isHedden: boolean = false;
  constructor() {
    // setInterval(() => {
    // }, 3000);
  }
  showHide() {
    this.isHedden = !this.isHedden;
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}

/**
 *
 * Qu'est ce qu'on trouve ici dans le TS
 *
 *  attributs (state)
 *
 *  méthodes (behaviour)
 */
