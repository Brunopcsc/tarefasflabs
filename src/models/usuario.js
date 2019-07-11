const mongoose = require('../database');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nome: { type: String, require: true,},
  email: { type: String, unique: true, required: true, lowercase: true,},
  senha: { type: String, required: true, select: false,},
  criadoEm: { type: Date, default: Date.now,},
});

// Encriptação do campo senha com um hash
usuarioSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.senha,10);
  this.senha = hash;
  next();
});


const usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario;
