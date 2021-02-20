  module.exports = class Service {
      async findAll() {
          return this.model.find()
      }

      async add(item) {
          return this.model.create(item)
      }

      async del(itemId) {
          return this.model.deleteOne({
              _id: itemId
          })
      }

      async find(itemId) {
          return this.model.findById(itemId)
      }

      async findOne(params) {
          return this.model.findOne(params)
      }

      async findByParams(params) {
          return this.model.find(params)
      }

  }