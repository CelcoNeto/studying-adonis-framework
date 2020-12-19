"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Company extends Model {
  static get hidden() {
    return ["created_at", "updated_at"];
  }

  phone() {
    return this.hasMany("App/Models/Phone", "id", "company_id");
  }

  user() {
    return this.hasMany("App/Models/User", "id", "company_id");
  }

  adresses() {
    return this.hasMany("App/Models/Address", "id", "company_id");
  }
}

module.exports = Company;
