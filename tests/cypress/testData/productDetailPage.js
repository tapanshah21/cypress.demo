

const basePath='/product';
export const DefaultProductID = '/0afa8de1-1445-11e8-edec-a628a9749637';
export const ButtonBar = '.button-bar.js-track-button-bar';

export function navigateTo(productID) {
    cy.visit(basePath+productID)
}



