import express from 'express';
import { DataLoader } from '../services/dataLoader.js';

const router = express.Router();

// GET /api/dashboard/kpis
router.get('/kpis', (req, res) => {
  try {
    const inventario = DataLoader.loadInventario();
    const ventas2023 = DataLoader.loadVentas2023();
    const ventas2024 = DataLoader.loadVentas2024();

    const totalStock = inventario.reduce(
      (sum, item) => sum + (parseFloat(item.Stock) || 0),
      0
    );

    const totalVentas2023 = ventas2023.reduce(
      (sum, item) => sum + (parseFloat(item.Cantidad) || 0),
      0
    );

    const totalVentas2024 = ventas2024.reduce(
      (sum, item) => sum + (parseFloat(item.Cantidad) || 0),
      0
    );

    const crecimiento = (
      ((totalVentas2024 - totalVentas2023) / totalVentas2023) *
      100
    ).toFixed(2);

    res.json({
      totalProductos: inventario.length,
      totalStock,
      ventasAnuales2023: totalVentas2023,
      ventasAnuales2024: totalVentas2024,
      crecimiento: parseFloat(crecimiento),
    });
  } catch (error) {
    console.error('Error getting KPIs:', error);
    res.status(500).json({ error: 'Error getting KPIs' });
  }
});

// GET /api/dashboard/sales-trend
router.get('/sales-trend', (req, res) => {
  try {
    const ventas2024 = DataLoader.loadVentas2024();

    // Simular datos mensuales
    const meses = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ];
    const trend = meses.map((mes, idx) => ({
      mes,
      ventas: Math.floor(Math.random() * 1000) + 500,
    }));

    res.json(trend);
  } catch (error) {
    console.error('Error getting sales trend:', error);
    res.status(500).json({ error: 'Error getting sales trend' });
  }
});

// GET /api/dashboard/inventory-distribution
router.get('/inventory-distribution', (req, res) => {
  try {
    const inventario = DataLoader.loadInventario();

    const distribuciones = [
      { name: 'En Stock', value: 60 },
      { name: 'Bajo Stock', value: 25 },
      { name: 'Agotado', value: 15 },
    ];

    res.json(distribuciones);
  } catch (error) {
    console.error('Error getting inventory distribution:', error);
    res.status(500).json({ error: 'Error getting inventory distribution' });
  }
});

export default router;
