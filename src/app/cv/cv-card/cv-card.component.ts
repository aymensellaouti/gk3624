import { Component, Input, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent {
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  @Input()
  cv: Cv | null = null;
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embauche(this.cv)) {
        this.toastr.success(`${this.cv.name} est pré embauché avec succès`);
      } else {
        this.toastr.warning(`${this.cv.name} est déjà pré embauché `);
      }
    }
  }
}
