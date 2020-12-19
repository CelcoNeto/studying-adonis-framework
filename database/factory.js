"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

// User Factory

Factory.blueprint("App/Models/User", (faker, i, data) => {
  return {
    name: faker.name(),
    password: faker.hash(),
    email: faker.email(),
    cpf: faker.cpf(),
    user_type: "USER_FIELD",
    ...data,
  };
});

// Company Factory

Factory.blueprint("App/Models/Company", (faker, i, data) => {
  return {
    company_name: faker.company(),
    fantasy_name: faker.company(),
    cnpj: faker.cpf(),
    email: faker.email(),
  };
});

// Phone Factory

Factory.blueprint("App/Models/Phone", (faker, i, data) => {
  return {
    phone: faker.phone(),
    type: "CELL PHONE",
    ...data,
  };
});

// Address Factory

Factory.blueprint("App/Models/Address", (faker, i, data) => {
  return {
    zip_code: faker.zip({ plusfour: true }),
    street: faker.street(),
    number: faker.integer(),
    complement: faker.name(),
    city: faker.city(),
    latitude: faker.latitude(),
    longitude: faker.longitude(),
    ...data,
  };
});
