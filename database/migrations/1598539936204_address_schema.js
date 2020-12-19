"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddressSchema extends Schema {
  up() {
    this.create("adresses", (table) => {
      table.increments();
      table.string("zip_code").notNullable();
      table.string("street").notNullable();
      table.string("number").notNullable();
      table.string("complement").notNullable();
      table.string("city").notNullable();
      table.string("latitude").notNullable();
      table.string("longitude").notNullable();

      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .nullable(true);

      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .nullable(true);

      table.timestamps();
    });
  }

  down() {
    this.drop("adresses");
  }
}

module.exports = AddressSchema;
