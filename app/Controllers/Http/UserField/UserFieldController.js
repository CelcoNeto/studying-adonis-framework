"use strict";

const UserFieldService = use("App/Services/UserField/UserFieldService");

class UserFieldController {
  constructor() {
    this.service = new UserFieldService();
  }

  async create({ request, response }) {
    try {
      await this.service.create(request.all());
      return response.status(201).send();
    } catch ({ message }) {
      return response.status(422).json([{ message }]);
    }
  }
}

module.exports = UserFieldController;
