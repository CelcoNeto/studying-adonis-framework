"use strict";

const Company = use("App/Models/Company");

const AddressService = use("App/Services/UserField/AddressService");
const PhoneService = use("App/Services/UserField/PhoneService");

class CompanyService {
  constructor() {
    this.addressService = new AddressService();
    this.phoneService = new PhoneService();
  }

  async create(company, address, phone) {
    const newCompany = await Company.create(company);

    await this.phoneService.create({
      ...phone,
      company_id: newCompany.id,
    });

    await this.addressService.create({
      ...address,
      company_id: newCompany.id,
    });

    return newCompany;
  }
}

module.exports = CompanyService;
