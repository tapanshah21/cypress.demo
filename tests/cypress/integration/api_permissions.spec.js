

import * as user from "../testData/users";
import * as request from "../testData/request";



describe('API testing - disable permissions for manager role', () => {


    request.ManagerEditablePermissions.forEach(function (item) {
        it('should disable editable permission - ' + item + ' for manager.', () => {
            request.updatePermissions(user.ManagerRoleID, user.DefaultToken, item, 0)
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(JSON.stringify(response.body)).to.not.contain(item)
                });
        });
    });
});


describe('API testing - Enable permissions for manager role', () => {

    request.ManagerEditablePermissions.forEach(function (item) {
        it('should enable editable permission - ' + item + ' for manager.', () => {
            request.updatePermissions(user.ManagerRoleID, user.DefaultToken, item, 1)
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(JSON.stringify(response.body)).to.contain(item)
                });
        });
    });

});


describe('API testing - Non-editable permissions of manager role', () => {

    request.ManagerNonEditablePermissions.forEach(function (item) {
        it('should not disable Non-editable - ' + item + ' for manager', () => {
            request.updatePermissions(user.ManagerRoleID, user.DefaultToken, item, 0)
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(JSON.stringify(response.body)).to.contain(item)  // permission name should still be there in the response
                });
        });
    });

});


describe('API testing - Negative tests', () => {

    it('PATCH - Bad RoleID, should return 404 - No role found with provided ID', function () {
        request.updatePermissions(user.BadRoleID, user.DefaultToken, 'barcode.print', 1)
            .then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('error','No role found with provided ID');
            });
    });

    it('PATCH - No RoleID, should return 404 - No role found with provided ID', function () {
        request.updatePermissions(null, user.DefaultToken, 'barcode.print', 1)
            .then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('error','No role found with provided ID');
            });
    });



    it('PATCH - Bad Token, should return 401', function () {
        request.updatePermissions(user.ManagerRoleID, user.BadToken, 'barcode.print', 1)
            .should((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.have.property('error', 'Access token is not valid')
            });
    });


    it('PATCH - No Token, should return 401', function () {
        request.updatePermissions(user.ManagerRoleID, null, 'barcode.print', 1)
        .should((response) => {
            expect(response.status).to.eq(401);
        });
    });


    // it('(Known Failure) PATCH - Bad Permission code, should return error', function () {
    //     request.updatePermissions(user.ManagerRoleID, user.DefaultToken, 'BadPermission', 1)
    //         .then((response) => {
    //             expect(response.status).to.eq(401);
    //         });
    //
    // });
    //
    // it('(Known Failure) PATCH - Bad Value, should return error', function () {
    //     request.updatePermissions(user.ManagerRoleID, user.DefaultToken, 'barcode.print', 99)
    //         .then((response) => {
    //             expect(response.status).to.eq(401);
    //         });
    // });

});

