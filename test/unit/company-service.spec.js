"use strict";

const { test, trait } = use("Test/Suite")("Company Service");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const Company = use("App/Models/Company");

/** @type {import('App/Services/UserField/CompanyService')} */
const CompanyService = use("App/Services/UserField/CompanyService");

trait("DatabaseTransactions");

test("should create new company", async ({ assert }) => {
  const company = await Factory.model("App/Models/Company").make();

  const address = await Factory.model("App/Models/Address").make();

  const phone = await Factory.model("App/Models/Phone").make();

  const savedCompany = await new CompanyService().create(
    company.toJSON(),
    address.toJSON(),
    phone.toJSON()
  );

  assert.equal(savedCompany.company_name, company.company_name);
  assert.equal(savedCompany.fantasy_name, company.fantasy_name);
  assert.equal(savedCompany.cnpj, company.cnpj);
  assert.equal(savedCompany.email, company.email);
});
