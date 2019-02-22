
export const EndPoint = '/api/1.0/roles/';





export function fetchPermissions(roleId, token) {
    return cy.request({
        url: EndPoint + roleId,
        headers: {Authorization: token}
    })

}

export function updatePermissions(roleId, token, name, value) {
    return cy.request({
        url: EndPoint + roleId,
        headers: {Authorization: token},
        method: "PATCH",
        body: {
            "permissions": [
                {
                    "name": name, //barcode.print
                    "value": value
                }
            ]
        },
        failOnStatusCode: false
    })
}



export const ManagerEditablePermissions =[
    "barcode.print",
    "product.add_edit",
    "store_credit.issue.manual",
    "store_credit.issue.return",
    "product.price_book.manage",
    "sale.on_account.process",
    "sale.layby.process",
    "sale.return.process",
    "sale.void",
    "sale.closed.edit",
    "sale.discount.manage",
    "stock.inventory_count.manage",
    "stock.supplier.order_return",
    "customer.export",
    "reporting.sales.all",
    "promotion.add_edit",
    "product.cost.manage",
    "product.cost.view",
];

export const ManagerNonEditablePermissions = [
    "user.add_edit",
    "user.delete",
    "loyalty.redeem",
    "gift_card.sell",
    "gift_card.redeem",
    "gift_card.void",
    "cash_movement.float.add",
    "cash_movement.cash_in_out.add",
    "cash_movement.petty_cash_in_out.add",
    "ecomm.manage",
    "ecomm.theme.manage",
    "ecomm.order.manage",
    "product.view",
    "product.inventory_count.manage",
    "product.delete",
    "product.import",
    "product.export",
    "product.loyalty.manage",
    "product.price_book.view",
    "product.price_book.export",
    "product.tag.manage",
    "product.type.manage",
    "product.brand.manage",
    "product.supplier.manage",
    "sell_screen.view",
    "sale.regular.process",
    "sale.parked.process",
    "sale.tax.remove",
    "sale.note.manage",
    "sale.history.view",
    "sale.export",
    "stock.transfer.create_send",
    "stock.transfer.receive",
    "customer.view",
    "customer.add_edit",
    "customer.delete",
    "customer.import",
    "customer.enable_loyalty",
    "reporting.dashboard",
    "reporting.payments",
    "reporting.store_credit",
    "reporting.gift_card",
    "reporting.inventory",
    "reporting.inventory.ppr",
    "reporting.register_closure",
    "reports.register_closure.export",
    "reports.legacy",
    "dashboard.view",
    "quick_keys.manage",
    "register.closures.perform",
    "consignment_view",
    "consignment_edit",
    "price_book_view",
    "price_book_edit",
    "product_view",
    "product_edit",
];


