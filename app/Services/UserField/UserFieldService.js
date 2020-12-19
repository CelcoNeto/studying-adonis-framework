"use strict";

const Env = use("Env");

const User = use("App/Models/User");

const TokenService = use("App/Services/Shared/TokenService");
const MailService = use("App/Services/Shared/MailService");
const CompanyService = use("App/Services/UserField/CompanyService");

class UserFieldService {
  constructor() {
    this.tokenService = new TokenService();
    this.companyService = new CompanyService();
    this.mailService = new MailService();
  }

  async create({ user, company, phone, address }) {
    const savedCompany = await this.companyService.create(
      company,
      address,
      phone
    );

    const savedUser = await User.create({
      ...user,
      company_id: savedCompany.id,
    });

    const token = await this.tokenService.storeTokenInUser({
      user: savedUser,
      tokenType: "confirmEmail",
    });

    this.sendNewUserFieldRegisterEmail(token, savedUser);
  }

  async sendNewUserFieldRegisterEmail(token, savedUser) {
    const confirmAccountUrl = `${Env.get(
      "FRONT_URL"
    )}/confirm-email?token=${token}`;

    const data = {
      emailBody: "emails.confirmemail",
      emailData: {
        firstName: savedUser.firstName,
        url: confirmAccountUrl,
      },
      to: savedUser.email,
      from: "no-reply@equipe.dix.com.br",
      subject: "Equipe Dix - Confirmação de e-mail",
    };

    await this.mailService.sendEmail(data);
  }
}

module.exports = UserFieldService;
