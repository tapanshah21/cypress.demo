

const basePath='users/roles/';
export const PRINTLABEL_CHECKBOX = 'vd-checkbox[label=\'Print Labels\'] input';
export const SAVE_BUTTON = '.vd-button';

export function navigateToRole(roleID) {
    cy.visit(basePath+roleID)
}


export function checkIfUnchecked(roleID,checkBox){
    navigateToRole(roleID);

    cy.get(checkBox).then((ele) => {

        let isChecked = ele.is(":checked");
        if (!isChecked) {
            cy.get(checkBox).check();
            cy.get(SAVE_BUTTON).click()
        }
    });
}




