import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  // filsComponent(dadMessage: string)
  @Input()
  dadMessage = '';
  @Output()
  ccPapa = new EventEmitter<string>();

  sayCcPapa() {
    this.ccPapa.emit('cc papa');
  }
}
