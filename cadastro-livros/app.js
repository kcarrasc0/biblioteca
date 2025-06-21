const mongoose = require('mongoose');
const Livro = require('./models/Livro');

mongoose.connect('mongodb://***/biblioteca', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conectado ao MongoDB local.");
  run();
}).catch(err => console.error("Erro ao conectar:", err));

async function run() {
  // 1. Inserir novo livro
  await Livro.create({
    titulo: "Novo livro",
    autor: "Autor Exemplo",
    ano_publicacao: 2021,
    genero: "Ficção",
    paginas: 300,
    sinopse: "Uma história fictícia.",
    isbn: "123456789"
  });

  // 2. Buscar por autor
  console.log(await Livro.find({ autor: "Ailton Krenak" }));

  // 3. Buscar por gênero
  console.log(await Livro.find({ genero: /Filosofia/ }));

  // 4. Buscar por ano
  console.log(await Livro.find({ ano_publicacao: 2020 }));

  // 5. Top 10 + páginas
  console.log(await Livro.find().sort({ paginas: -1 }).limit(10));

  // 6. Top 10 - páginas
  console.log(await Livro.find().sort({ paginas: 1 }).limit(10));

  // 7. Buscar por ISBN
  console.log(await Livro.findOne({ isbn: "9788577347531" }));

  // 8. Atualizar livro
  await Livro.updateOne({ isbn: "123456789" }, { $set: { titulo: "Livro Atualizado" } });

  // 9. Deletar livro
  await Livro.deleteOne({ isbn: "123456789" });

  mongoose.connection.close();
}
