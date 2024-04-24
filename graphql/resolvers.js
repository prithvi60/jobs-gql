const prisma = require("../prisma/db");

module.exports = {
  Query: {
    async getAllJobs() {
      const jobs = await prisma.job.findMany();
      return jobs;
    },

    async getJob(_, { ID }) {
      const job = await prisma.job.findUnique({
        where: {
          id: ID,
        },
      });
      console.log(job.id);
      return job;
    },
  },
};
