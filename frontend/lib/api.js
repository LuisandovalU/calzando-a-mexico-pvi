import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Métodos de Analytics
export const analyticsAPI = {
  getABCAnalysis: () => api.get('/analytics/abc-analysis'),
  getStatistics: () => api.get('/analytics/statistics'),
};

// Métodos de Dashboard
export const dashboardAPI = {
  getKPIs: () => api.get('/dashboard/kpis'),
  getSalesTrend: () => api.get('/dashboard/sales-trend'),
  getInventoryDistribution: () => api.get('/dashboard/inventory-distribution'),
};

// Métodos de WMS
export const wmsAPI = {
  createCyclicCount: (data) => api.post('/wms/cyclic-count/create', data),
  getCyclicCountOrders: () => api.get('/wms/cyclic-count/orders'),
  updateTask: (orderId, taskId, data) =>
    api.post(`/wms/cyclic-count/${orderId}/task/${taskId}`, data),
};

export default api;
