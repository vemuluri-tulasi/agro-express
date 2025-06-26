import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import path from 'path';
import Supplier from './models/Supplier.js';


dotenv.config();

import { getApiHealths } from './controllers/health.js'
import { postApiSignups, postApiLogins } from './controllers/user.js';
import { postApiProduct, getApiProductsById, putApiTransactionsById, getApiProducts, getApiAllProducts } from './controllers/product.js';
import { postApisellsupplyes } from './controllers/supplier.js'

const app = express()
app.use(express.json());

const __dirname = path.resolve();

const connectionDB = () => {

  const conn = mongoose.connect(process.env.MONGO_URI);

  if (conn) {
    console.log("MongoDB connected Successfully.")
  }
}

connectionDB();

app.get('/api/v1/healths', getApiHealths);

//signup api//

app.post('/api/v1/signups', postApiSignups);

// login api//
app.post('/api/v1/logins', postApiLogins);

//products api
app.post('/api/v1/products', postApiProduct);

app.get('/api/v1/products/user/:id', getApiProductsById);  //for populate by user

//put - /api/products/:id
app.put("/api/v1/products/:id", putApiTransactionsById);

//get - /api/v1/products/${id}
app.get('/api/v1/products/:id', getApiProducts);

//get - /api/v1/products
app.get('/api/v1/products', getApiAllProducts);

//post - /api/v1/sellsupplyes

app.post('/api/v1/sellsupplyes', postApisellsupplyes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
});