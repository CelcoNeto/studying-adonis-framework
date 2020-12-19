"use strict";

const Phone = use("App/Models/Phone");

class PhoneService {
  async create(phone) {
    return await Phone.create(phone);
  }
}

module.exports = PhoneService;
