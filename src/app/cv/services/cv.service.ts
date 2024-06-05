import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
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
   * Retourne un liste de cvs
   *
   * @returns CV[]
   *
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Retourne un cv via son id
   *
   * @param id : number, l'id du cv à sélectionner
   * @returns CV ou null si le cv n'est pas trouvé
   *
   */
  getCvById(id: number): Cv | null {
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
