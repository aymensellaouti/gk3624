import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../cv/services/cv.service";
import { distinctUntilChanged, map } from "rxjs";

export function uniqueCinValidator(cvService: CvService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return cvService.selectByProperty('cin', control.value).pipe(
      distinctUntilChanged(),
      map(cvs => cvs.length ? {'cin': `Le cin ${control.value} existe déjà`}: null)
    )
  }
}


// flux cvs
// flux ou bien null quand y a pas d'erreur ou bien objet décrivant le ou les erreurs quand il y en a
