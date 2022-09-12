import express from "express";
import routeProduct from './routes/product.js';

const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/productos',routeProduct);

app.listen(PORT, () => {
  console.log(`Server on Port ${PORT}...😎😎😎`);
});
