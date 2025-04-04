const express = require('express');
const admin = require('firebase-admin');
require('dotenv').config(); // Carrega as variáveis de ambiente do .env (se usar dotenv)

// Se você estiver usando o arquivo firebase-admin.json diretamente:
const serviceAccount = require('./kmcerto1-firebase-adminsdk.json'); // Caminho para o arquivo JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // Obtém uma referência ao Firestore

const app = express();
const port = process.env.PORT || 3001; // Use a porta definida pelo ambiente ou 3001 por padrão

app.get('/', (req, res) => {
  res.send('Servidor KMCerto está rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});