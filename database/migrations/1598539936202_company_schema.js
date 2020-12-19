"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

const Situation = use("App/Enums/Situation");

class CompanySchema extends Schema {
  getCompanySituation() {
    return Object.keys(Situation).map((situation) => Situation[situation]);
  }

  up() {
    this.create("companies", (table) => {
      table.increments();
      table.string("company_name").notNullable().unique();
      table.string("fantasy_name").notNullable().unique();
      table.string("cnpj").notNullable().unique();
      table.string("email").notNullable();

      table
        .enu("situation", this.getCompanySituation(), {
          useNative: false,
          enumName: "company_situation_type",
        })
        .notNullable()
        .default(Situation.ACTIVE);

      table
        .integer("logo_id")
        .unsigned()
        .references("id")
        .inTable("images")
        .nullable();

      table.timestamps();
    });
  }

  down() {
    this.drop("companies");
  }
}

module.exports = CompanySchema;
