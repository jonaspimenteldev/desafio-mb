const { MongoClient } = require('mongodb');
const { url } = require('../config/database');

const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

function getDatabase() {
  return client.db();
}

module.exports = {
  connect,
  getDatabase,
};
