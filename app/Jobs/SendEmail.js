"use strict";

const Mail = use("Mail");

class SendEmail {
  static get concurrency() {
    return 1;
  }

  static get key() {
    return "SendEmail-job";
  }

  async handle({ emailBody, emailData, to, from, subject }) {
    Mail.send(emailBody, emailData, (message) => {
      message.to(to).from(from).subject(subject);
    });
  }
}

module.exports = SendEmail;
