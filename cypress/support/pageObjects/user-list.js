export class UserListObjects {
    heading() {
      return cy.get('h1');
    }
    table() {
      return cy.get('table');
    }
    nameColumn() {
      return this.table().find('th').eq(0);
    }
    emailColumn() {
        return this.table().find('th').eq(1);
    }
    actionColumn() {
        return this.table().find('th').eq(2);
    }
    deleteButton() {
        return this.table().find('button').eq(0);
    }
    warningDialog() {
        return cy.get('.swal2-popup');
    }
    deleteButtonDialog() {
        return this.warningDialog().find('button').contains('Delete');
    }
    cancelButtonDialog() {
        return this.warningDialog().find('button').contains('Cancel');
    }
  }
  export const UserList = new UserListObjects();