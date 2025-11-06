'use client';

import { useEffect, useState } from 'react';
import { wmsAPI } from '@/lib/api';
import CreateCountOrderForm from './components/CreateCountOrderForm';
import CountOrdersHistory from './components/CountOrdersHistory';

export default function CyclicCountsPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    try {
      const response = await wmsAPI.getCyclicCountOrders();
      setOrders(response.data);
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleOrderCreated = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  if (loading) return <div className="text-center py-8">Cargando...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Conteos Cíclicos</h1>

      {/* Create Form */}
      <CreateCountOrderForm onSuccess={handleOrderCreated} />

      {/* Orders History */}
      <CountOrdersHistory orders={orders} />
    </div>
  );
}
