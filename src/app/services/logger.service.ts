import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggerService {
  logger(message: any) {
    console.log('Logging from Logger :');
    console.log({message});
  }
}
