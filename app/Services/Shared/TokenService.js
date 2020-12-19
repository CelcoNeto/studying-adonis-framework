const { randomBytes } = require("crypto");
const { promisify } = require("util");

class TokenService {
  async storeTokenInUser({ user, tokenType }) {
    const random = await promisify(randomBytes)(74);
    const token = random.toString("hex");

    await user.tokens().create({
      token,
      type: tokenType,
    });

    return token;
  }
}

module.exports = TokenService;
