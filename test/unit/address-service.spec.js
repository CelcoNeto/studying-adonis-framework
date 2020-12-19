"use strict";

const { test, trait } = use("Test/Suite")("Address Service");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const Address = use("App/Models/Address");

/** @type {import('App/Services/UserField/AddressService')} */
const AddressService = use("App/Services/UserField/AddressService");

trait("DatabaseTransactions");

test("should create new Address", async ({ assert }) => {
  const address = await Factory.model("App/Models/Address").make();

  const savedAddress = await new AddressService().create(address.toJSON());

  assert.equal(savedAddress.zip_code, address.zip_code);
  assert.equal(savedAddress.street, address.street);
  assert.equal(savedAddress.complement, address.complement);
  assert.equal(savedAddress.city, address.city);
});
