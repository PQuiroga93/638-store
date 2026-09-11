require('dotenv').config();
const express = require('express');
const productosRoutes = require('./routes/productos.routes');

const app = express();
app.use(express.json());
app.use('/productos', productosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});