import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

export const analyticsAPI = {
  getABCAnalysis: async () => {
    const res = await client.get('/analytics/abc-analysis');
    return res.data;
  },
  getStatistics: async () => {
    const res = await client.get('/analytics/statistics');
    return res.data;
  },
};

export const dashboardAPI = {
  getKPIs: async () => {
    const res = await client.get('/dashboard/kpis');
    return res.data;
  },
  getSalesTrend: async () => {
    const res = await client.get('/dashboard/sales-trend');
    return res.data;
  },
  getInventoryDistribution: async () => {
    const res = await client.get('/dashboard/inventory-distribution');
    return res.data;
  },
};

export const wmsAPI = {
  createCyclicCount: async (data) => {
    const res = await client.post('/wms/cyclic-count/create', data);
    return res.data;
  },
  getCyclicCountOrders: async () => {
    const res = await client.get('/wms/cyclic-count/orders');
    return res.data;
  },
  updateTask: async (orderId, taskId, data) => {
    const res = await client.post(`/wms/cyclic-count/${orderId}/task/${taskId}`, data);
    return res.data;
  },
};

export default client;