import express from 'express';
import { AnalyticsService } from '../services/analyticsService.js';

const router = express.Router();

// GET /api/analytics/abc-analysis
router.get('/abc-analysis', (req, res) => {
  try {
    const data = AnalyticsService.calculateABCAnalysis();
    res.json(data);
  } catch (error) {
    console.error('Error in ABC analysis:', error);
    res.status(500).json({ error: 'Error calculating ABC analysis' });
  }
});

// GET /api/analytics/statistics
router.get('/statistics', (req, res) => {
  try {
    const stats = AnalyticsService.obtenerEstadisticas();
    res.json(stats);
  } catch (error) {
    console.error('Error getting statistics:', error);
    res.status(500).json({ error: 'Error getting statistics' });
  }
});

export default router;
