import * as signIn from "../testData/signInPage";
import * as user from "../testData/users";
import * as roles from "../testData/rolePage"
import * as request from "../testData/request";
import * as productDetail from "../testData/productDetailPage";
import * as product from "../testData/productPage";
const PrintLabel = 'barcode.print';
const AddProduct = 'product.add_edit';

describe('Edit manager permission (Print Label) via API and verify the changes from UI', () => {


    before('Ensure the Print Label Permission is checked', function () {
        signIn.signInAsAdmin();
        roles.checkIfUnchecked(user.ManagerRoleID, roles.PRINTLABEL_CHECKBOX);
    });


    it('Disable Print Label permission via API, should get OK', () => {
        request.updatePermissions(user.ManagerRoleID, user.DefaultToken, PrintLabel, 0).should((response) => {
            expect(response.status).to.eq(200);
        });
    });


    it('Sign in as Admin and expect "Print Label" permission to be unchecked for manager ', function () {
        signIn.signInAsAdmin();
        roles.navigateToRole(user.ManagerRoleID);
        cy.get(roles.PRINTLABEL_CHECKBOX).then((checkBox) => {
            expect(checkBox).to.be.not.checked
        })
    });


    it('Sign in as Manager and expect there is no "Print Label" button in Product page', function () {
        signIn.signInAsManager();
        productDetail.navigateTo(productDetail.DefaultProductID);
        cy.get(productDetail.ButtonBar).should(($a) => {
            expect($a).to.not.contain('Print Label');
        });
    });


    it('Enable Print Label permission via API, should get OK', () => {
        request.updatePermissions(user.ManagerRoleID, user.DefaultToken, PrintLabel, 1)
            .then((response) => {
                expect(response.status).to.eq(200);
            })
    });


    it('Sign in as Admin and expect "Print Label" permission to be checked for manager ', function () {
        signIn.signInAsAdmin();
        roles.navigateToRole(user.ManagerRoleID);
        cy.get(roles.PRINTLABEL_CHECKBOX).should('be.checked')
    });


    it('Sign in as Manager and expect there is a "Print Label" button in Product Detail page', function () {
        signIn.signInAsManager();
        productDetail.navigateTo(productDetail.DefaultProductID);
        cy.get(productDetail.ButtonBar).should(($a) => {
            expect($a).to.contain('Print Label');
        });
    });

});


describe('Edit manager permission (Add Product) via API and verify the changes from UI', () => {

    it('Disable Add Product permission via API, should get OK', () => {
        request.updatePermissions(user.ManagerRoleID, user.DefaultToken, AddProduct, 0).should((response) => {
            expect(response.status).to.eq(200);
        });
    });


    it('Sign in as Manager and expect there is no "Add Product" button in Product page', function () {
        signIn.signInAsManager();
        product.navigateTo();
        cy.get(product.ACTION_BAR).should(($a) => {
            expect($a).to.not.contain('Add Product');
        });
    });

    it('Enable Add Product permission via API, should get OK', () => {
        request.updatePermissions(user.ManagerRoleID, user.DefaultToken, AddProduct, 1).should((response) => {
            expect(response.status).to.eq(200);
        });
    });


    it('Sign in as Manager and expect there is "Add Product" button in Product page', function () {
        signIn.signInAsManager();
        cy.visit('/product').contains('Add Product').should('be.visible');
    });


});





