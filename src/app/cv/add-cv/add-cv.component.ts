import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { filter, tap } from 'rxjs';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { uniqueCinValidator } from 'src/app/validators/unique-cin.validator';
import { firstCinValidator } from 'src/app/validators/cin-age.validator';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  form: FormGroup = this.formBuilder.group(
    {
      name: [
        '',
        { validators: [Validators.required, Validators.minLength(3)] },
      ],
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
      cin: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8),
          ],
          asyncValidators: [uniqueCinValidator(this.cvService)],
          updateOn: 'blur',
        },
      ],
      path: ['', {}],
    },
    {
      validators: [firstCinValidator()],
      // updateOn: 'blur',
    }
  );
  constructor() {
    this.age?.valueChanges.subscribe((newAge) => {
      if (newAge >= 18) {
        this.path?.enable();
      } else {
        this.path?.disable();
      }
    });
    this.form.statusChanges
      .pipe(
        filter(() => this.form.valid),
        tap(() => {
          localStorage.setItem('addCvForm', JSON.stringify(this.form.value));
        })
      )
      .subscribe();
    const savedForm = localStorage.getItem('addCvForm');
    if (savedForm) {
      this.form.setValue(JSON.parse(savedForm));
    }
  }
  addCv() {
    this.cvService
      .addCv(this.form.value)
      .pipe(
        tap((cv) => {
          // this.form.reset();
          localStorage.removeItem('addCvForm');
          this.router.navigate([APP_ROUTES.cv]);
        })
      )
      .subscribe();
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
