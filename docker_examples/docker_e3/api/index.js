const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a PostgreSQL y sincronizar modelos
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
}).catch((err) => {
  console.error('Error al sincronizar la base de datos', err);
});

// Rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
