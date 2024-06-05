import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SayHelloService {

  constructor(private logger: LoggerService) { }

  hello() {
    this.logger.logger('Hello :D');
  }
}
