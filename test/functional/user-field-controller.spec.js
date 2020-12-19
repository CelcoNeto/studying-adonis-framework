"use strict";

const { test, trait } = use("Test/Suite")("User Field Controller");
const Mail = use("Mail");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("should create a new user field and send email to email user", async ({
  assert,
  client,
}) => {
  Mail.fake();

  const emailPayload = {
    email: "email@email.com",
  };

  const user = await Factory.model("App/Models/User").make(emailPayload);

  const company = await Factory.model("App/Models/Company").make();

  const address = await Factory.model("App/Models/Address").make();

  const phone = await Factory.model("App/Models/Phone").make();

  const response = await client
    .post("api/user-field")
    .send({
      user: {
        ...user.toJSON(),
        password: user.password,
      },
      company: company.toJSON(),
      phone: phone.toJSON(),
      address: address.toJSON(),
    })
    .end();

  response.assertStatus(201);

  const recentEmail = Mail.pullRecent();

  assert.equal(recentEmail.message.to[0].address, "email@email.com");

  const savedUser = await User.findByOrFail("email", emailPayload.email);

  assert.equal(savedUser.name, user.name);
  assert.equal(savedUser.email, user.email);
  assert.equal(savedUser.cpf, user.cpf);
  assert.equal(savedUser.user_type, user.user_type);
});
