
'use strict';
import * as users from './users'
export const USERNAME_BOX = '#signin_username';
export const PASSWORD_BOX = '#signin_password';
export const SIGNIN_BUTTON ='.form-control--green';

const basePath = '/signin';



export function navigateTo () {
    cy.visit(basePath,{failOnStatusCode: false})
}



export function signinAs(username,password){
    cy.get(USERNAME_BOX).type(username)
        .get(PASSWORD_BOX).type(password)
        .get(SIGNIN_BUTTON).click()
}

export function signInAsAdmin(){
    navigateTo();
    signinAs(users.AdminUserName,users.AdminPassword)
}


export function signInAsManager(){
    navigateTo();
    signinAs(users.ManagerUserName,users.ManagerPassword)
}
