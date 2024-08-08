const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  console.log('Petición a la API');
  res.send('¡Hola desde la API!');
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
