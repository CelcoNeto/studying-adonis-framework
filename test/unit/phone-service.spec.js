"use strict";

const { test, trait } = use("Test/Suite")("Phone Service");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const Phone = use("App/Models/Phone");

/** @type {import('App/Services/UserField/PhoneService')} */
const PhoneService = use("App/Services/UserField/PhoneService");

trait("DatabaseTransactions");

test("should create new phone", async ({ assert }) => {
  const phone = await Factory.model("App/Models/Phone").make();

  const savedPhone = await new PhoneService().create(phone.toJSON());

  assert.equal(savedPhone.phone, phone.phone);
  assert.equal(savedPhone.type, phone.type);
});
