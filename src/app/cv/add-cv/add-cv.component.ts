import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  form: FormGroup = this.formBuilder.group({
    name: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    firstname: [
      '',
      { validators: [Validators.required, Validators.minLength(3)] },
    ],
    job: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    age: [
      0,
      {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.max(70),
        ],
      },
    ],
    cin: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    path: ['', {}],
  });

  addCv() {
    this.cvService.addCv(this.form.value).pipe(
      tap((cv) => {
        this.router.navigate([APP_ROUTES.cv]);
      })
    ).subscribe();
  }

  get name() {
    return this.form.get('name');
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get job() {
     return this.form.get('job');
  }
  get path() {
     return this.form.get('path');
  }
  get cin() {
     return this.form.get('cin');
  }
  get age() {
     return this.form.get('age');
  }
}
