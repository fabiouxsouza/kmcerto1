require('dotenv').config(); // Carrega as variáveis do .env
const express = require('express');
const admin = require('firebase-admin');

console.log(process.env.FIREBASE_CREDENTIALS);
const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS.replace(/\\n/g, '\n'));


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor KMCerto está rodando!');
});

app.post('/despesas', async (req, res) => {
  try {
    const novaDespesa = req.body;
    const docRef = await db.collection('despesas').add(novaDespesa);
    res.status(201).send(`Despesa registrada com ID: ${docRef.id}`);
  } catch (error) {
    console.error('Erro ao registrar despesa:', error);
    res.status(500).send('Erro ao registrar despesa.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
