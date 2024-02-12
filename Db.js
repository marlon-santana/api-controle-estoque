
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://marlon:marlon@cluster0.j9cd3m4.mongodb.net/?retryWrites=true&w=majority'; // Substitua com a sua Connection String

async function connect() {
    const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Conectado ao MongoDB Atlas');
    return client;
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB Atlas', err);
    throw err;
  }
}

module.exports = { connect };
