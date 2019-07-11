const express = require('express');
const Usuario = require('../models/usuario');
const router = express.Router();

router.get('/', async (req,res) =>{
  try{
    const usuarios = await Usuario.find();

    return res.send({usuarios});
  } catch(err){
    return res.status(400).send({error: 'Erro ao carregar os usuários'});
  }
})

router.get('/:usuarioId', async (req,res) =>{
  try{
    const usuario = await Usuario.findById(req.params.usuarioId).populate('usuario');

    return res.send({usuario});
  } catch(err){
    return res.status(400).send({error: 'Erro ao carregar usuário'});
  }
})

router.post('/', async (req,res) => {
  const { email } = req.body;
  try {
    if(await Usuario.findOne({email}))
      return res.status(400).send({error: 'Usuário já existe'});
    const usuario = await Usuario.create(req.body);

    usuario.senha = undefined;
    return res.send({usuario});
  } catch(err){
    return res.status(400).send({error: 'Erro ao registrar usuário'});
  }
})

router.put('/:usuarioId', async (req,res) =>{
  try{
    const {nome,email,senha} = req.body;
    const usuario = await Usuario.findByIdAndUpdate(req.params.usuarioId, {
      nome,
      email,
      senha
    });
    return res.send({usuario});
  } catch(err){
    return res.status(400).send({error: "Erro ao atualizar usuário"});
  }
})

router.delete('/:usuarioId', async (req,res) =>{
  try{
    await Usuario.findByIdAndRemove(req.params.usuarioId);

    return res.send();
  } catch(err){
    return res.status(400).send({error: 'Erro ao remover usuário'});
  }
})

module.exports = app => app.use('/usuario', router);
