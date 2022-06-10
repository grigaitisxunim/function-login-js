class Service {
  constructor({ repository }) {
    this.repository = repository;
  }
  async find(itemId) {
    return this.repository.find(itemId);
  }

  async create(data) {
    return this.repository.create(data);
  }
}

module.exports = Service;
