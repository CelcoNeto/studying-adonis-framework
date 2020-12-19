"use strict";

const Address = use("App/Models/Address");

class AddressService {
  async create(address) {
    return await Address.create(address);
  }
}

module.exports = AddressService;
