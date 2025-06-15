import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import incidentRoutes from './routes/incidents.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/incidents', incidentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT, () =>
  console.log(`Auth-Service listening on http://localhost:${process.env.PORT}`)
);
