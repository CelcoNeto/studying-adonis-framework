"use strict";

class Auth {
  get sanitizationRules() {
    return {
      email: "normalize_email",
    };
  }

  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: "required|email",
      password: "required|min:5",
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({ error: errorMessages });
  }
}

module.exports = Auth;
