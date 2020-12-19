"use strict";

/** @typedef {import('../Enums/UserType')} */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Guard {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, response }, next, [role]) {
    const { user_type } = await auth.getUser();

    if (user_type.toUpperCase() !== role.toUpperCase()) {
      return response
        .status(401)
        .send(["You don't have permission to access this resource."]);
    }

    await next();
  }
}

module.exports = Guard;
