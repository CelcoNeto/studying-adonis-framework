"use strict";

const kue = use("Kue");

const Job = use("App/Jobs/SendEmail");

class MailService {
  /**
   *
   * @param {Object} data
   */
  async sendEmail(data) {
    const priority = "normal";
    const attempts = 1;
    const remove = true;
    const jobFn = (job) => job.backoff();

    await kue.dispatch(Job.key, data, { priority, attempts, remove, jobFn });
  }
}

module.exports = MailService;
