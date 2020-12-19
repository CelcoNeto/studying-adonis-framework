"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

const PhoneType = use("App/Enums/PhoneType");

class PhoneSchema extends Schema {
  getPhoneType() {
    return Object.keys(PhoneType).map((phoneType) => PhoneType[phoneType]);
  }

  up() {
    this.create("phones", (table) => {
      table.increments();
      table.string("phone").notNullable();

      table
        .enu("type", this.getPhoneType(), {
          useNative: false,
          enumName: "phone_type",
        })
        .notNullable();

      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .nullable();

      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .nullable();

      table.timestamps();
    });
  }

  down() {
    this.drop("phones");
  }
}

module.exports = PhoneSchema;
