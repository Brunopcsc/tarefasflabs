const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/exercicioSflabs', {useNewUrlParser: true,useFindAndModify:false,useCreateIndex:true});
mongoose.Promise = global.Promise;
module.exports = mongoose;
