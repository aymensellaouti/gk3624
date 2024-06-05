import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  observable$: Observable<number>;
  toastr = inject(ToastrService);
  constructor() {
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable$.subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (err) => {},
      complete: () => {}
    });
    // setTimeout(() => {

      this.observable$
      // 5 4 3 2 1
      .pipe(
        map(valeur => valeur * 3 ),
        // 15 12 9 6 3
        filter(val => !(val % 2))
        //12 6
      )

      .subscribe({
        next: (valeur) => {
          this.toastr.info('' + valeur);
        },
        error: (err) => {},
        complete: () => {
          this.toastr.warning('Fin du compte à rebous');
        },
      });

    //  }, 3000)
  }
}
