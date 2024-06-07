import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import medicineRoute from './routes/medicineRoute.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/medicinelist', medicineRoute);

// Rest API
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to HeathCRAD</h1>`);
});

// Run Listen
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`.bgCyan.white);
});
