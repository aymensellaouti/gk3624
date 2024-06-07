import { APP_API } from './../../src/app/config/api.config';
describe('Get Cv Details', () => {
  it('should show CvDetails after click', () => {
    cy.intercept(APP_API.cv, { fixture: 'cvs.json' });
    cy.visit('/cv');
    cy.get("[data-cy='listCvs']").children().first().click();
    cy.get("[data-cy='cardCv']").should('exist');
    cy.intercept(APP_API.cv + 1, { fixture: 'cv1.json' });
    cy.get("[data-cy='cardCvDetailsButton']").click({ force: true });
    cy.location().should((actualLocaltion) => {
      expect(actualLocaltion.pathname).to.equal('/cv/1');
    })
  });
});
