import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import config from './config.js';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl)
  .catch((error) => console.log(error.reason));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});
