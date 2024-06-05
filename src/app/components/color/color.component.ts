import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input()
  defaultColor = 'gray';
  color = '';
  acr = inject(ActivatedRoute);
  constructor() {}
  ngOnInit(): void {
    this.defaultColor = this.acr.snapshot.params['defaultColor'];
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
