"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Phone extends Model {
  company() {
    return this.hasMany("App/Models/Company");
  }
}

module.exports = Phone;
