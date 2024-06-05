import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  loggerService = inject(LoggerService);
  sayHello = inject(SayHelloService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  today = new Date();
  selectedCv$: Observable<Cv>;
  /**
   * la liste des cvs à gérer
   */
  cvs: Cv[] = [];
  constructor() {
    this.cvs = this.cvService.getCvs();
    this.sayHello.hello();
    this.loggerService.logger('cc je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre cvTech');
    this.selectedCv$ = this.cvService.selectedCv$;

    //V1
    // this.cvService.selectedCv$.subscribe((cv: Cv) => {
    //   this.selectedCv = cv;
    // });
  }
  getSelected(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
