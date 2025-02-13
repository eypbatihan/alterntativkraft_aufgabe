/// <reference types="cypress" />

const { UserList } = require("../support/pageObjects/user-list");

describe("User List", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("check user list page and table", () => {
    UserList.heading().should("contain.text", "User List");
    UserList.nameColumn().should("contain.text", "Name");
    UserList.emailColumn().should("contain.text", "Email");
    UserList.actionColumn().should("contain.text", "Action");
    UserList.deleteButton().should("be.visible");
  });
  it("delete a user and confirm it", () => {
    UserList.deleteButton().click();
    UserList.warningDialog().should("be.visible");
    UserList.deleteButtonDialog().click();
  });
  it("delete a user and not confirm it", () => {
    UserList.deleteButton().click();
    UserList.warningDialog().should("be.visible");
    UserList.cancelButtonDialog().click();
  });
});
