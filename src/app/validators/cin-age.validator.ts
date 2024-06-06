import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";


export function firstCinValidator(): ValidatorFn {

  return (form: AbstractControl) => {
    const age = form.get('age')?.value;
    const cin: string = form.get('cin')?.value;
    if (!cin) return null;
    const cinSlice = + cin.slice(0,2);
    return (age > 60 && cinSlice > 19) || (age < 60 && cinSlice < 19) ? {cinFirstNumber: 'Le cin et l age ne correspendent pas'}: null;
  };
}
