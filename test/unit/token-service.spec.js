"use strict";

const { test, trait } = use("Test/Suite")("Token Service");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

/** @type {import('App/Services/Shared/TokenService')} */
const TokenService = use("App/Services/Shared/TokenService");

/** @type {import('App/Services/UserField/UserFieldService')} */
const UserFieldService = use("App/Services/UserField/UserFieldService");

trait("DatabaseTransactions");

test("should save new token by user", async ({ assert }) => {
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

  const savedToken = await new TokenService().storeTokenInUser({
    user,
    tokenType: "confirmEmail",
  });

  assert.isNotNull(savedToken);
}).timeout(0);
