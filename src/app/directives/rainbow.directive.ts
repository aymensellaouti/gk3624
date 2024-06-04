import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type="text"]',
})
export class RainbowDirective {
  @HostBinding('style.borderColor') bc = 'black';
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.border') border = 'solid black 4px';
  constructor() {
    // console.log('Rainbow');
  }

  @HostListener('keyup') onKeyUp () {
    this.bc = this.getRandomcolor();
    this.color = this.getRandomcolor();
  }

  private getRandomcolor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
