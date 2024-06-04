import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  // filsComponent(dadMessage: string)
  @Input()
  dadMessage = '';
}
