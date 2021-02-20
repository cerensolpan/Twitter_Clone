const BaseService = require('./base-service');
const LikesModel = require('../models/likes-model');

class LikesService extends BaseService {
    model = LikesModel
}

module.exports = new LikesService();