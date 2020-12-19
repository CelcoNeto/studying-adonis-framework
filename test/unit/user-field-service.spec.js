"use strict";

const { test, trait } = use("Test/Suite")("User Field Service");
const Mail = use("Mail");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

/** @type {import('App/Services/UserField/UserFieldService')} */
const UserFieldService = use("App/Services/UserField/UserFieldService");

trait("DatabaseTransactions");

test("it should create a new user field", async ({ assert }) => {
  Mail.fake();

  const emailPayload = {
    email: "email@email.com",
  };

  const user = await Factory.model("App/Models/User").make(emailPayload);

  const company = await Factory.model("App/Models/Company").make();

  const address = await Factory.model("App/Models/Address").make();

  const phone = await Factory.model("App/Models/Phone").make();

  const savedUser = await new UserFieldService().create({
    user: {
      ...user.toJSON(),
      password: user.password,
    },
    company: company.toJSON(),
    phone: phone.toJSON(),
    address: address.toJSON(),
  });

  const recentEmail = Mail.pullRecent();

  assert.equal(recentEmail.message.to[0].address, "email@email.com");

  assert.equal(savedUser.name, user.name);
  assert.equal(savedUser.email, user.email);
  assert.equal(savedUser.cpf, user.cpf);
  assert.equal(savedUser.user_field, user.user_field);

  const savedCompany = await savedUser.company().fetch();

  assert.equal(savedCompany.company_name, company.company_name);
  assert.equal(savedCompany.fantasy_name, company.fantasy_name);
  assert.equal(savedCompany.cnpj, company.cnpj);
  assert.equal(savedCompany.email, company.email);

  const companyPhone = await savedCompany.phone().fetch();
  const savedPhone = companyPhone.toJSON();

  assert.equal(savedPhone[0].phone, phone.phone);
  assert.equal(savedPhone[0].type, phone.type);
  assert.equal(savedPhone[0].company_id, savedCompany.id);

  const companyAddress = await savedCompany.adresses().fetch();
  const savedAddress = await companyAddress.toJSON();

  assert.equal(savedAddress[0].zip_code, address.zip_code);
  assert.equal(savedAddress[0].street, address.street);
  assert.equal(savedAddress[0].complement, address.complement);
  assert.equal(savedAddress[0].city, address.city);
});
