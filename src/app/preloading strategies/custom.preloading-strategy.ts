import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, preload: () => Observable<any>): Observable<any> {
    console.log({route});

    if (route.data && route.data['preload']) {
      return preload();
    }
    return of(null);
  }

}
