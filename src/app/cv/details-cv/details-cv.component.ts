import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { APP_ROUTES } from 'src/app/config/routes.config';


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  constructor() {}

  ngOnInit() {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.getCvById(id);
    if (!this.cv) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  }

  delete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
