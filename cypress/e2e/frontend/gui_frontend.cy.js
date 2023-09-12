/// <reference types="Cypress"/>

describe('Teste de Frontend', () => {
    it('Deve abrir o mapa do Google', () => {
        cy.visit("https://www.vr.com.br/")
        cy.get(':nth-child(4) > :nth-child(4) > .vr-footer__link').click()
    });
});