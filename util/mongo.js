const mongoose = require('mongoose')
const { mongoPath } = require('./config.json')
mongoose.set('useFindAndModify', false);
module.exports = async () => {
  mongoose.connect(mongoPath, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}