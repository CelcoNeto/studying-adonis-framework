"use strict";

class CreateUserField {
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
      "user.email": "required|email|unique:users,email",
      "user.name": "required",
      "user.password": "required|min:5",
      "user.cpf": "required|min:12|max:15",
      "company.company_name": "required|unique:companies,company_name",
      "company.fantasy_name": "required|unique:companies,fantasy_name",
      "company.cnpj": "required|min:14|max:18|unique:companies,cnpj",
      "company.email": "required|email",
      "phone.phone": "required",
      "phone.type": "required",
      "address.zip_code": "required",
      "address.street": "required",
      "address.number": "required",
      "address.city": "required",
      "address.latitude": "required",
      "address.longitude": "required",
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({ error: errorMessages });
  }
}

module.exports = CreateUserField;
