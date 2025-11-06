import express from 'express';
import { cyclicCountService } from '../services/cyclicCountService.js';

const router = express.Router();

// POST /api/wms/cyclic-count/create
router.post('/cyclic-count/create', (req, res) => {
  try {
    const { tienda, zona, responsable, incluirTodos, sku } = req.body;

    const order = cyclicCountService.createCountOrder({
      tienda,
      zona,
      responsable,
      incluirTodos,
      sku,
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating cyclic count:', error);
    res.status(500).json({ error: 'Error creating cyclic count' });
  }
});

// GET /api/wms/cyclic-count/orders
router.get('/cyclic-count/orders', (req, res) => {
  try {
    const orders = cyclicCountService.obtenerOrdenesConteo();
    res.json(orders);
  } catch (error) {
    console.error('Error getting count orders:', error);
    res.status(500).json({ error: 'Error getting count orders' });
  }
});

// POST /api/wms/cyclic-count/:orderId/task/:taskId
router.post('/cyclic-count/:orderId/task/:taskId', (req, res) => {
  try {
    const { orderId, taskId } = req.params;
    const { cantidadContada } = req.body;

    const updatedOrder = cyclicCountService.actualizarTarea(
      parseInt(orderId),
      parseInt(taskId),
      cantidadContada
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order or task not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Error updating task' });
  }
});

export default router;
