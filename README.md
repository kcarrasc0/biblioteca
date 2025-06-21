# Projeto MongoDB - Cadastro de Livros

## Descrição
Projeto que utiliza MongoDB local para gerenciar livros, como parte da recuperação de BDNC.

## Tecnologias
- Node.js
- MongoDB local
- MongoDB Compass
- Mongoose (ODM)

## Funcionalidades
- Inserir novo livro
- Buscar por autor, gênero, ano
- Buscar por ISBN
- Listar livros com mais/menos páginas
- Atualizar livro
- Deletar livro


## Estrutura
biblioteca/
├── models/
│   └── Livro.js
├── app.js
├── package.json
├── README.md



## Requisitos
- Node.js instalado
- MongoDB Community Server (rodando localmente)

## Execução
- Rode o MongoDB local (no terminal):
```bash
mongod

Após isso rode o comando no terminal, Não esqueça de da cd na pasta raiz
node app.js
