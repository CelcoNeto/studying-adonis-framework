"use strict";

const User = use("App/Models/User");
const UserType = use("App/Enums/UserType");

class UserSupportAuthService {
  async create({ email, password }, auth) {
    const user = await User.query()
      .where("email", email)
      .where("user_type", UserType.SUPPORT)
      .firstOrFail();

    const jwt = await auth.attempt(email, password);

    return {
      auth: jwt,
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }
}

module.exports = UserSupportAuthService;
