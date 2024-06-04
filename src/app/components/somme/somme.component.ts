import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-somme',
  templateUrl: './somme.component.html',
  styleUrls: ['./somme.component.css'],
})
export class SommeComponent {
  @Input({
    alias: 'param1',
  })
  x = 0;
  @Input({
    alias: 'param2',
  })
  y = 0;
}
