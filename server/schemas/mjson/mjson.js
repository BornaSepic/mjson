const mongoose = require('mongoose')

const mjsonSchema = new mongoose.Schema({
  data: {
    type: JSON,
    required: true
  }
}, {timestamps: true})


module.exports = mongoose.model('mjson', mjsonSchema)