import { Injectable, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  private http = inject(HttpClient);
  /**
   *
   * Il va informer toute personne inscrite par le click sur item cv
   */
  selectedCvSubject$ = new Subject<Cv>();
  selectedCv$ = this.selectedCvSubject$.asObservable();
  onSelectCv(cv: Cv) {
    this.selectedCvSubject$.next(cv);
  }
  constructor() {
    this.cvs = [
      new Cv(
        1,
        'vaillant',
        'cedric',
        20,
        '1234',
        'dev',
        'rotating_card_profile2.png'
      ),
      new Cv(2, 'sautreau', 'alban', 20, '12345', 'dev', '     '),
      new Cv(
        3,
        'kaakati',
        'dania',
        20,
        '12347',
        'dev',
        'rotating_card_profile.png'
      ),
      new Cv(4, 'sellaouti', 'aymen', 41, '12347', 'dev', ''),
    ];
  }

  /**
   *
   * Retourne Observbale d'un liste de cvs de l'API
   *
   * @returns CV[]
   *
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }
  /**
   *
   * Retourne un liste de cvs
   *
   * @returns CV[]
   *
   */
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Retourne un cv via son id
   *
   * @param id : number, l'id du cv à sélectionner
   * @returns Observable CV ou null si le cv n'est pas trouvé
   *
   */
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  /**
   *
   * Retourne un cv via son id
   *
   * @param id : number, l'id du cv à sélectionner
   * @returns CV ou null si le cv n'est pas trouvé
   *
   */
  fakeGetCvById(id: number): Cv | null {
    return this.cvs.find(c => c.id == id) ?? null;
  }

  /**
   *
   * Retourne un boolean permettant de savoir si on a supprimé le cv ou pas
   *
   * @param cv: CV, le cv à supprimer
   * @returns boolean
   *
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}
