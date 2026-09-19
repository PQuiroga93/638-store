require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productos.routes');
const categoriasRoutes = require('./routes/categorias.routes');
const colorRoutes = require('./routes/color.routes');
const productoDetalleRoutes = require('./routes/productoDetalle.routes');
const trabajoRealizadoRoutes = require('./routes/trabajoRealizado.routes');


const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/productos', productosRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/color', colorRoutes);
app.use('/producto-detalle', productoDetalleRoutes);
app.use('/trabajo-realizado', trabajoRealizadoRoutes);

app.use(errorHandler); // Siempre al final

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
