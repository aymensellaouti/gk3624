import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-is-even',
  templateUrl: './is-even.component.html',
  styleUrls: ['./is-even.component.css'],
})
export class IsEvenComponent implements OnChanges{
  @Input() value: number = 0;
  message = this.value % 2 ? `${this.value} is odd` : `${this.value} is even`;

  ngOnChanges(changes: SimpleChanges): void {
    this.message =
      changes['value'].currentValue % 2
        ? `${this.value} is odd`
        : `${this.value} is even`;
  }
}
