import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input({
    required: true
  })
  cv!: Cv;
  @Input()
  imageSize = 50;
  cvService = inject(CvService);
  // @Output()
  // selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    this.cvService.onSelectCv(this.cv);
    // this.selectCv.emit(this.cv);
  }
}
