import {APP_API} from './../../src/app/config/api.config';
describe('Liste des cvs', () => {
  it('should show CvList', () => {
    cy.intercept(APP_API.cv, {fixture: 'cvs.json'})
    cy.visit('/cv');
    cy.get("[data-cy='listCvs']")
    .children()
    .should('have.length', 2)
     cy.get("[data-cy='listCvs']")
     .children()
     .first().contains('Aymen')
     ;
    cy.get("[data-cy='cardCv']").should('not.exist');
  });
});
