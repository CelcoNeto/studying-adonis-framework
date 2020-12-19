"use strict";

const UserType = use("App/Enums/UserType");
const Situation = use("App/Enums/Situation");

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  getUserTypes() {
    return Object.keys(UserType).map((userType) => UserType[userType]);
  }

  getUserSituation() {
    return Object.keys(Situation).map((situation) => Situation[situation]);
  }

  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("cpf").notNullable();

      table.string("email", 254).notNullable();

      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .nullable();

      table
        .integer("avatar_id")
        .unsigned()
        .references("id")
        .inTable("images")
        .nullable();

      table.string("password").notNullable();

      table
        .enu("situation", this.getUserSituation(), {
          useNative: false,
          enumName: "user_field_situation_type",
        })
        .notNullable()
        .default(Situation.ACTIVE);

      table
        .enu("user_type", this.getUserTypes(), {
          useNative: false,
          enumName: "user_type",
        })
        .notNullable();

      table.boolean("isAdmin").defaultTo(false);

      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
