"use strict";

const UserFieldService = use("App/Services/UserField/UserFieldService");

/*
|--------------------------------------------------------------------------
| UserSupportSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class UserSupportSeeder {
  async run() {
    const newSupport = {
      user: {
        name: "Support Master",
        email: "support@dix.com.br",
        cpf: "730.019.390-01",
        password: "secret",
        user_type: "SUPPORT",
      },
      company: {
        company_name: "Dix",
        fantasy_name: "Dix",
        cnpj: "78.010.460/0001-98",
        email: "company@email.com",
      },
      phone: {
        phone: "(44) 9999-9999",
        type: "CELL PHONE",
      },
      address: {
        zip_code: "87030230",
        street: "Rua Dez de maio",
        number: "337",
        complement: "Apartamento 601",
        city: "Maringá",
        latitude: "123",
        longitude: "123",
      },
    };

    await new UserFieldService().create(newSupport);
  }
}

module.exports = UserSupportSeeder;
