const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.json({
    message: 'Um salve vindo da API!',
  });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
