import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EMPTY, Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  loggerService = inject(LoggerService);
  sayHello = inject(SayHelloService);
  toastr = inject(ToastrService);
  today = new Date();
  selectedCv$: Observable<Cv>;
  cvs$ = this.cvService.getCvs().pipe(
    catchError(
      (e) => {
        this.toastr.error(`Attention!!! les données sont Fake
          Veuillez contacter l'admin
        `);
        return of(this.cvService.getFakeCvs())
      }
    )
  );
  /**
   * la liste des cvs à gérer
   */
  cvs: Cv[] = [];
  constructor() {
    // this.cvService.getCvs().subscribe({
    //   next: (cvsListFromApi) => {this.cvs = cvsListFromApi},
    //   error: (err) => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`Attention!!! les données sont Fake
    //       Veuillez contacter l'admin
    //     `)
    //   }
    //});
    this.sayHello.hello();
    this.loggerService.logger('cc je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre cvTech');
    this.selectedCv$ = this.cvService.selectedCv$;

    //V1
    // this.cvService.selectedCv$.subscribe((cv: Cv) => {
    //   this.selectedCv = cv;
    // });
  }
  // getSelected(cv: Cv) {
  //   // this.selectedCv = cv;
  //   this.todoService.logTodos();
  // }
}
