"use strict";

const UserSupportAuthService = use(
  "App/Services/UserSupport/UserSupportAuthService"
);

class UserSupportAuthController {
  constructor() {
    this.service = new UserSupportAuthService();
  }

  async create({ request, response, auth }) {
    try {
      const jwt = await this.service.create(request.all(), auth);
      return response.status(201).send(jwt);
    } catch ({ message }) {
      return response.status(401).json(["User is invalid."]);
    }
  }
}

module.exports = UserSupportAuthController;
