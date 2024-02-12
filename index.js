
const express = require('express');
const app = express();
const { connect } = require('./Db.js');
const port = 3000;
const Cliente = require('./models/Clients');

const cadastrosClientes = [
  new Cliente('Cliente 1', '12345', 5, 3, ['azul', 'vermelho', 'verde'], [2, 1, 3]),
  // Adicione mais cadastros conforme necessário
];

app.use(express.json());

// app.get('/clientes', (req, res) => {
//   res.json(cadastrosClientes);
// });


app.post('/clientes', async (req, res) => {

    const client = await connect();
    const db = client.db('clientes');
    const collection = db.collection('clientes');
    
    const novoClienteData = req.body;
    const novoCliente = new Cliente(
      novoClienteData.nome,
      novoClienteData.numeroNotaFiscal,
      novoClienteData.quantidadeRoloTecidos,
      novoClienteData.quantidadeRolos,
      novoClienteData.cores,
      novoClienteData.quantidadesCores
    );

    try {
      const resultado = await collection.insertOne(novoCliente);

  
      if (resultado && resultado.acknowledged && resultado.insertedId) {
        const clienteInserido = await collection.findOne({ _id: resultado.insertedId });
  
        if (clienteInserido) {
          res.json(clienteInserido);
        } else {
          res.status(500).json({ error: 'Erro ao inserir cliente: cliente não encontrado após a inserção' });
        }
      } else {
        res.status(500).json({ error: 'Erro ao inserir cliente: resposta inesperada' });
      }
    } catch (err) {
      console.error('Erro ao inserir cliente', err);
      res.status(500).json({ error: 'Erro interno ao inserir cliente' });
    } finally {
      client.close();
    }
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
