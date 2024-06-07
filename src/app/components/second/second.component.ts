import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `

    <form #myForm="ngForm">
      <input type="text" ngModel name="test" />
    </form>
    <p *ngIf="true">second works!</p>
  `,
  styles: [],
})
export class SecondComponent {}
