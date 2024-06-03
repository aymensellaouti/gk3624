import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  defaultColor = 'gray';
  color = this.defaultColor;
  changeColor(newColor: HTMLInputElement ) {
    this.color = newColor.value;
    newColor.value = '';
  }
  reinintColor() {
    this.color = this.defaultColor;
  }
}
