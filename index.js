require('dotenv').config();
const express = require('express');
const productosRoutes = require('./routes/productos.routes');
const categoriasRoutes = require('./routes/categorias.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use('/productos', productosRoutes);
app.use('/categorias', categoriasRoutes);

app.use(errorHandler); // Siempre al final

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
