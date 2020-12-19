"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ImagesSchema extends Schema {
  up() {
    this.create("images", (table) => {
      table.increments();
      table.string("path").notNullable();
      table.string("filename").notNullable();
      table.string("original_name").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("images");
  }
}

module.exports = ImagesSchema;
