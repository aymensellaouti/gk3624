import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { EMPTY, catchError, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


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
  toast = inject(ToastrService);
  constructor() {}

  ngOnInit() {
    const id = this.acr.snapshot.params['id'];
    // asynchrone c'est non bloquant c'est galant c'est symaps il laisse passer tout le monde
    this.cvService.getCvById(id).subscribe({
      next: (cv) => {
        this.cv = cv;
      },
      error: (e) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }

  delete() {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv.id).pipe(
        tap(() => {
          this.router.navigate([APP_ROUTES.cv]);
        }),
        catchError(() => {
          this.toast.error('Un problème a été détecté, veuillez contacter l admin');
          return EMPTY;
        })
      ).subscribe();
    }
  }
}
