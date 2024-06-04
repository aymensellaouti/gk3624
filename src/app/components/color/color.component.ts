import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input()
  defaultColor = 'gray';
  color = '';
  constructor() {}
  ngOnInit(): void {
    this.color = this.defaultColor;
  }
  changeColor(newColor: HTMLInputElement ) {
    this.color = newColor.value;
    newColor.value = '';
  }
  reinintColor() {
    this.color = this.defaultColor;
  }
}
