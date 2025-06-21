const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  ano_publicacao: Number,
  genero: String,
  paginas: Number,
  sinopse: String,
  isbn: String
});

module.exports = mongoose.model('Livro', livroSchema);
