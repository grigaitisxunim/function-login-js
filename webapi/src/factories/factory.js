const Repository = require("../repositories/repository");
const Service = require("../services/service");

const { join } = require("path");
const file = join(__dirname, "../", "../database", "data.json");

const generateInstance = () => {
  const repository = new Repository({ file });
  const service = new Service({ repository });

  return service;
};

module.exports = { generateInstance };

//generateInstance().find().then(console.log);
