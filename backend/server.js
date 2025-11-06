// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dashboardRouter from './routes/dashboard.js';
import analyticsRouter from './routes/analytics.js';
import wmsRouter from './routes/wms.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Montar routers que existen en backend/routes
app.use('/api/dashboard', dashboardRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/wms', wmsRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Backend API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});